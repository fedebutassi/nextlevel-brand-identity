import { mkdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { reels } from './reels-data.mjs';
import { renderSceneArt } from './scene-art.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(here, '..');
const previewDir = process.env.REEL_PREVIEW_DIR
  ? path.resolve(process.env.REEL_PREVIEW_DIR)
  : null;
const fps = 30;
const slugs = (process.env.REEL_SLUGS ?? '').split(',').map(value => value.trim()).filter(Boolean);
const selectedReels = slugs.length ? reels.filter(reel => slugs.includes(reel.slug)) : reels;

if (!selectedReels.length) throw new Error('No se encontró el reel solicitado.');
await mkdir(outputDir, { recursive: true });
if (previewDir) await mkdir(previewDir, { recursive: true });

const assertSafeLayout = async (page, sceneIndex, slug) => {
  const violations = await page.evaluate(index => {
    const scene = document.querySelector(`.scene[data-index="${index}"]`);
    const selectors = ['h1', '.copy p', '.cta', '.url'];
    const boxes = selectors
      .map(selector => [selector, scene.querySelector(selector)])
      .filter(([, element]) => element)
      .map(([selector, element]) => [selector, element.getBoundingClientRect()]);
    const failures = boxes.flatMap(([selector, box]) => {
      const outside = box.left < 70 || box.right > 1010 || box.top < 150 || box.bottom > 1620;
      return outside ? [`${selector} fuera de zona segura`] : [];
    });
    const ordered = boxes.map(([, box]) => box);
    ordered.slice(0, -1).forEach((box, itemIndex) => {
      if (box.bottom > ordered[itemIndex + 1].top) failures.push('textos superpuestos');
    });
    const copy = scene.querySelector('.copy').getBoundingClientRect();
    const art = scene.querySelector('.art').getBoundingClientRect();
    if (copy.bottom > art.top) failures.push('copy y gráfico superpuestos');
    return failures;
  }, sceneIndex);
  if (violations.length) throw new Error(`${slug} / escena ${sceneIndex + 1}: ${violations.join(', ')}`);
};

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto(`file://${path.join(here, 'index.html')}`);
await page.evaluate(() => document.fonts.ready);

for (const reel of selectedReels) {
  const frames = path.join('/tmp', `${reel.slug}-distinct-frames`);
  await rm(frames, { recursive: true, force: true });
  await mkdir(frames, { recursive: true });
  const renderableReel = {
    ...reel,
    art: reel.scenes.map((_, index) => renderSceneArt(reel.cinematic, index))
  };
  await page.evaluate(data => window.setReel(data), renderableReel);
  if (previewDir) {
    const previewTimes = [1, 4, 7, 10, 13, 16];
    for (const [index, seconds] of previewTimes.entries()) {
      await page.evaluate(ms => window.renderAt(ms), seconds * 1000);
      await assertSafeLayout(page, index, reel.slug);
      await page.screenshot({
        path: path.join(previewDir, `${reel.slug}-scene-${String(index + 1).padStart(2, '0')}.png`)
      });
    }
    console.log(path.join(previewDir, `${reel.slug}-scene-*.png`));
    continue;
  }
  for (let frame = 0; frame < 18 * fps; frame += 1) {
    await page.evaluate(ms => window.renderAt(ms), frame * 1000 / fps);
    await page.screenshot({ path: path.join(frames, `frame-${String(frame).padStart(4, '0')}.png`) });
  }
  const output = path.join(outputDir, `${reel.slug}.mp4`);
  const encoding = spawnSync('ffmpeg', [
    '-y', '-v', 'error', '-framerate', String(fps), '-i', path.join(frames, 'frame-%04d.png'),
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', output
  ], { stdio: 'inherit' });
  if (encoding.status !== 0) process.exit(encoding.status ?? 1);
  console.log(output);
}

await browser.close();
