import { mkdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { reel } from './reel-data.mjs';
import { renderSceneArt } from '../../../../../reels/nuevos/source/scene-art.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(here, '..', 'exports');
const fps = 30;
const duration = 18;

const assertSafeLayout = async (page, sceneIndex) => {
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
  if (violations.length) throw new Error(`Escena ${sceneIndex + 1}: ${violations.join(', ')}`);
};

await mkdir(outputDir, { recursive: true });
const frames = path.join('/tmp', `${reel.slug}-frames`);
await rm(frames, { recursive: true, force: true });
await mkdir(frames, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
const player = path.resolve(here, '../../../../../reels/nuevos/source/index.html');
await page.goto(`file://${player}`);
await page.evaluate(() => document.fonts.ready);
await page.addStyleTag({ content: `
  .cinematic-landing .final .copy{top:350px}
  .cinematic-landing .final .copy h1{font-size:108px}
  .cinematic-landing .final .copy p{margin-top:28px}
  .cinematic-landing .final .cta{margin-top:36px;font-size:28px}
  .cinematic-landing .final .url{margin-top:18px}
  .cinematic-landing .final .art{top:1260px;height:180px}
` });

const renderable = {
  ...reel,
  art: reel.scenes.map((_, index) => renderSceneArt(reel.cinematic, index))
};
await page.evaluate(data => window.setReel(data), renderable);

for (const [index, seconds] of [1, 4, 7, 10, 13, 16].entries()) {
  await page.evaluate(ms => window.renderAt(ms), seconds * 1000);
  await assertSafeLayout(page, index);
  if (index === 0) await page.screenshot({ path: path.join(outputDir, 'cover.png') });
}

for (let frame = 0; frame < duration * fps; frame += 1) {
  await page.evaluate(ms => window.renderAt(ms), frame * 1000 / fps);
  await page.screenshot({ path: path.join(frames, `frame-${String(frame).padStart(4, '0')}.png`) });
}

const output = path.join(outputDir, 'reel-landing-o-sitio-web.mp4');
const encoding = spawnSync('ffmpeg', [
  '-y', '-v', 'error', '-framerate', String(fps), '-i', path.join(frames, 'frame-%04d.png'),
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', output
], { stdio: 'inherit' });
if (encoding.status !== 0) process.exit(encoding.status ?? 1);

await browser.close();
console.log(output);
