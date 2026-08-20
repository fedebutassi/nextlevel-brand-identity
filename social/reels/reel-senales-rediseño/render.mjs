import { mkdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const frames = path.join('/tmp', 'nextlevel-reel-senales-frames');
const output = path.join(here, 'reel-senales-rediseño.mp4');
const fps = 30;
const duration = 18;

await rm(frames, { recursive: true, force: true });
await mkdir(frames, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto(`file://${path.join(here, 'index.html')}`);
await page.evaluate(() => document.fonts.ready);

for (let frame = 0; frame < duration * fps; frame += 1) {
  await page.evaluate(ms => window.renderAt(ms), frame * 1000 / fps);
  await page.screenshot({ path: path.join(frames, `frame-${String(frame).padStart(4, '0')}.png`) });
}

await browser.close();

const result = spawnSync('ffmpeg', [
  '-y', '-v', 'error', '-framerate', String(fps),
  '-i', path.join(frames, 'frame-%04d.png'),
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  output,
], { stdio: 'inherit' });

if (result.status !== 0) process.exit(result.status ?? 1);
console.log(output);
