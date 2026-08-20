import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { carousels } from './carousel-data.mjs';
import { buildConnectedDecisionsSlide } from './connected-decisions-layout.mjs';
import { buildDistinctCampaignSlide } from './distinct-campaign-layouts.mjs';
import { buildLogoImage } from './logo-assets.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const runFile = promisify(execFile);
const chromeExecutable = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const requestedSlug = process.argv[2];
const selectedCarousels = requestedSlug ? carousels.filter(carousel => carousel.slug === requestedSlug) : carousels;
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

if (requestedSlug && selectedCarousels.length === 0) {
  throw new Error(`No existe el carrusel ${requestedSlug}`);
}

const buildLogo = dark => buildLogoImage({ dark });

const wrapNote = note => {
  const words = note.split(' ');
  const lines = [];
  for (const word of words) {
    if (lines.length === 0) {
      lines.push(word);
      continue;
    }
    const candidate = `${lines.at(-1) ?? ''} ${word}`.trim();
    if (candidate.length <= 58) {
      lines[lines.length - 1] = candidate;
      continue;
    }
    lines.push(word);
  }
  return lines.map((line, index) => `<tspan x="64" dy="${index === 0 ? 0 : 42}">${escapeXml(line)}</tspan>`).join('');
};

const buildSlide = (carousel, slide, index) => {
  if (carousel.variant === 'distinct-campaign') {
    return buildDistinctCampaignSlide(carousel, slide, index);
  }
  if (carousel.variant === 'connected-decisions') {
    return buildConnectedDecisionsSlide(carousel, slide, index);
  }
  const dark = index === 3 || slide.cta;
  const background = dark ? '#1A1410' : '#F1E8D8';
  const foreground = dark ? '#F1E8D8' : '#1A1410';
  const muted = dark ? '#B7A892' : '#6B5E4F';
  const titleY = slide.title.length === 2 ? 560 : 620;
  const lines = slide.title.map((line, lineIndex) => {
    const fill = lineIndex === slide.accent ? '#D24322' : foreground;
    return `<text x="64" y="${titleY + lineIndex * 142}" fill="${fill}">${escapeXml(line)}</text>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <style>
    @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-Bold.ttf');font-weight:800}
    @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-SemiBold.ttf');font-weight:600}
    @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-ExtraLight.ttf');font-weight:300}
  </style>
  <rect width="1080" height="1350" fill="${background}"/>
  ${buildLogo(dark)}
  <g font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${muted}">
    <text x="1016" y="75" text-anchor="end">${String(index + 1).padStart(2, '0')} / ${String(carousel.slides.length).padStart(2, '0')}</text>
    <path d="M64 96H1016M64 1294H1016" stroke="${muted}" stroke-width="1.5" opacity=".55"/>
    <text x="64" y="1330">NEXTLVL.COM.AR</text>
    <text x="1016" y="1330" text-anchor="end">${escapeXml(carousel.label)}</text>
  </g>
  <g font-family="Bricolage" font-size="124" font-weight="800" letter-spacing="-5">${lines}</g>
  <text x="64" y="910" font-family="Bricolage" font-size="34" font-weight="300" fill="${muted}">${wrapNote(slide.note)}</text>
  ${index === 0 ? `<text x="64" y="1140" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${muted}">↳ DESLIZÁ →</text>` : ''}
  ${slide.cta ? '<rect x="64" y="1030" width="300" height="78" rx="39" fill="#D24322"/><text x="214" y="1080" text-anchor="middle" font-family="Bricolage" font-size="28" font-weight="600" fill="#F1E8D8">HABLEMOS →</text>' : ''}
</svg>`;
};

const renderSvgToPng = async (source, output) => {
  await runFile(chromeExecutable, [
    '--headless=new',
    '--hide-scrollbars',
    '--disable-gpu',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=1000',
    '--window-size=1080,1350',
    `--screenshot=${output}`,
    `file://${source}`
  ]);
};

for (const carousel of selectedCarousels) {
  const base = path.join(here, carousel.slug);
  const sourceDir = path.join(base, 'source');
  const exportDir = path.join(base, 'exports');
  await mkdir(sourceDir, { recursive: true });
  await mkdir(exportDir, { recursive: true });

  for (const [index, slide] of carousel.slides.entries()) {
    const number = String(index + 1).padStart(2, '0');
    const source = path.join(sourceDir, `${number}.svg`);
    const output = path.join(exportDir, `${number}.png`);
    await writeFile(source, buildSlide(carousel, slide, index));
    await renderSvgToPng(source, output);
  }

  const sequence = carousel.slides.map((slide, index) => `${index + 1}. **${slide.title.join(' ')}**  \n   ${slide.note}`).join('\n');
  const caption = carousel.caption ? `\n## Caption\n\n${carousel.caption}\n` : '';
  await writeFile(path.join(base, 'README.md'), `# ${carousel.label}\n\n## Secuencia\n\n${sequence}\n${caption}\n## Producción\n\n- Formato: 1080×1350.\n- Editables: \`source/\`.\n- Exportaciones: \`exports/\`.\n`);
}
