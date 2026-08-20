import { mkdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import path from 'node:path';
import { reels } from './reels-data.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.REEL_OUTPUT_DIR
  ? path.resolve(process.env.REEL_OUTPUT_DIR)
  : path.join(here, 'exports');
const fps = 30;

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto(`file://${path.join(here, 'index.html')}`);
await page.evaluate(() => document.fonts.ready);

const requestedSlugs = (process.env.REEL_SLUGS ?? process.env.REEL_SLUG ?? '')
  .split(',')
  .map(slug => slug.trim())
  .filter(Boolean);
const selectedReels = requestedSlugs.length > 0
  ? reels.filter(reel => requestedSlugs.includes(reel.slug))
  : reels;

if (selectedReels.length === 0) throw new Error('No se encontró el reel solicitado.');

for (const reel of selectedReels) {
  const frames = path.join('/tmp', `${reel.slug}-frames`);
  await rm(frames, { recursive: true, force: true });
  await mkdir(frames, { recursive: true });
  await page.evaluate(data => window.setReel(data), reel);
  const duration = Math.max(...reel.scenes.map(scene => scene.end));
  for (let frame = 0; frame < duration * fps; frame += 1) {
    await page.evaluate(ms => window.renderAt(ms), frame * 1000 / fps);
    await page.screenshot({ path: path.join(frames, `frame-${String(frame).padStart(4, '0')}.png`) });
  }
  const output = path.join(outputDir, `${reel.slug}.mp4`);
  const result = spawnSync('ffmpeg', ['-y','-v','error','-framerate',String(fps),'-i',path.join(frames,'frame-%04d.png'),'-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart',output], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
  console.log(output);
}
await browser.close();
