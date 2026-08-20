import { execFile } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(here, 'flyer.svg');
const outputDir = path.resolve(here, '../exports');
const output = path.join(outputDir, 'flyer-dia-nutricionista-juli.png');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const runFile = promisify(execFile);

await mkdir(outputDir, { recursive: true });
await runFile(chrome, [
  '--headless=new',
  '--hide-scrollbars',
  '--disable-gpu',
  '--allow-file-access-from-files',
  '--force-device-scale-factor=1',
  '--window-size=1080,1350',
  `--screenshot=${output}`,
  `file://${source}`
]);

console.log(output);

