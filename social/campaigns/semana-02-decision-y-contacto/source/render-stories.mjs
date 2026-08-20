import { execFile } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const campaignRoot = path.resolve(here, '..');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const runFile = promisify(execFile);

const C = {
  ink: '#1A1410',
  paper: '#F1E8D8',
  paper2: '#E6DCC6',
  accent: '#D24322',
  sand: '#9D8B75',
  paperSoft: '#C9B99F'
};

const assetRoot = '../../../../../';
const fontCss = `<style>
  @font-face{font-family:Bricolage;src:url('${assetRoot}fonts/BricolageGrotesque_24pt_Condensed-Bold.ttf');font-weight:800}
  @font-face{font-family:Bricolage;src:url('${assetRoot}fonts/BricolageGrotesque_24pt_Condensed-SemiBold.ttf');font-weight:600}
  @font-face{font-family:Bricolage;src:url('${assetRoot}fonts/BricolageGrotesque_24pt_Condensed-ExtraLight.ttf');font-weight:300}
</style>`;

const escapeText = value => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const textLines = ({ lines, x, y, gap, size, weight = 800, fill = C.ink, accent = [], spacing = -3 }) =>
  lines.map((line, index) => `<text x="${x}" y="${y + index * gap}" font-family="Bricolage" font-size="${size}" font-weight="${weight}" letter-spacing="${spacing}" fill="${accent.includes(index) ? C.accent : fill}">${escapeText(line)}</text>`).join('');

const logo = ({ dark = false } = {}) =>
  `<image href="${assetRoot}assets/${dark ? 'logo-dark.svg' : 'logo.svg'}" x="72" y="172" width="190" height="33"/>`;

const story = ({ index, dark = false, label, body }) => {
  const background = dark ? C.ink : C.paper;
  const muted = dark ? C.paperSoft : C.sand;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
    ${fontCss}
    <rect width="1080" height="1920" fill="${background}"/>
    ${logo({ dark })}
    <text x="1008" y="198" text-anchor="end" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${muted}">${String(index).padStart(2, '0')} / 03</text>
    <path d="M72 230H1008" stroke="${muted}" opacity=".5"/>
    ${body}
    <text x="72" y="1730" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${muted}">${escapeText(label)}</text>
    <path d="M72 1760H1008" stroke="${muted}" opacity=".35"/>
    <text x="1008" y="1810" text-anchor="end" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${muted}">@NEXTLVL.OK</text>
  </svg>`;
};

const choiceStories = [
  story({ index: 1, label: 'DECISIÓN · FORMATO', body: `
    <text x="72" y="430" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">PRIMERO, EL OBJETIVO</text>
    ${textLines({ lines: ['¿Landing', 'o sitio web?'], x: 72, y: 620, gap: 118, size: 118, accent: [1] })}
    <text x="72" y="930" font-family="Bricolage" font-size="34" font-weight="300" fill="#6B5E4F">No se elige por cantidad de páginas.</text>
    <g transform="translate(72 1090)">
      <rect width="430" height="310" rx="22" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <text x="34" y="66" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${C.accent}">LANDING</text>
      <text x="34" y="160" font-family="Bricolage" font-size="56" font-weight="800" fill="${C.ink}">UNA</text>
      <text x="34" y="220" font-family="Bricolage" font-size="56" font-weight="800" fill="${C.ink}">ACCIÓN.</text>
      <rect x="462" width="430" height="310" rx="22" fill="${C.ink}"/>
      <text x="496" y="66" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${C.accent}">SITIO WEB</text>
      <text x="496" y="160" font-family="Bricolage" font-size="56" font-weight="800" fill="${C.paper}">VARIOS</text>
      <text x="496" y="220" font-family="Bricolage" font-size="56" font-weight="800" fill="${C.paper}">RECORRIDOS.</text>
    </g>` }),
  story({ index: 2, label: 'FUNCIÓN · RECORRIDO', body: `
    ${textLines({ lines: ['La diferencia', 'está en lo que', 'necesitás resolver.'], x: 72, y: 470, gap: 110, size: 100, accent: [2] })}
    <g transform="translate(72 930)">
      <rect width="890" height="140" rx="18" fill="${C.paper2}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="70" cy="70" r="30" fill="${C.accent}"/>
      <text x="125" y="63" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.ink}">UNA PROPUESTA</text>
      <text x="125" y="103" font-family="Bricolage" font-size="27" font-weight="300" fill="#6B5E4F">Landing: concentra el próximo paso.</text>
      <rect y="174" width="890" height="140" rx="18" fill="${C.ink}"/>
      <circle cx="70" cy="244" r="30" fill="${C.accent}"/>
      <text x="125" y="237" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.paper}">MÁS INFORMACIÓN</text>
      <text x="125" y="277" font-family="Bricolage" font-size="27" font-weight="300" fill="${C.paperSoft}">Sitio: organiza servicios y contenidos.</text>
    </g>` }),
  story({ index: 3, dark: true, label: 'CONTACTO · DM', body: `
    <text x="72" y="430" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">NO TENÉS QUE ELEGIR SOLO</text>
    ${textLines({ lines: ['Contanos qué', 'necesitás mostrar.'], x: 72, y: 630, gap: 118, size: 108, fill: C.paper, accent: [1] })}
    <text x="72" y="940" font-family="Bricolage" font-size="34" font-weight="300" fill="${C.paperSoft}">Ordenamos el formato según el objetivo.</text>
    <g transform="translate(72 1110)">
      <rect width="890" height="250" rx="28" fill="${C.paper}"/>
      <circle cx="58" cy="58" r="14" fill="${C.accent}"/>
      <text x="98" y="70" font-family="Bricolage" font-size="21" font-weight="600" letter-spacing="3" fill="${C.sand}">NUEVO MENSAJE</text>
      <text x="42" y="178" font-family="Bricolage" font-size="70" font-weight="800" fill="${C.ink}">WEB</text>
      <path d="M750 142H830M798 110L830 142 798 174" fill="none" stroke="${C.accent}" stroke-width="10"/>
    </g>
    <rect x="72" y="1430" width="720" height="106" rx="53" fill="${C.accent}"/>
    <text x="432" y="1498" text-anchor="middle" font-family="Bricolage" font-size="32" font-weight="600" fill="${C.paper}">ESCRIBINOS “WEB” POR DM →</text>` })
];

const briefStories = [
  story({ index: 1, label: 'CONSULTA · PRIMER PASO', body: `
    <text x="72" y="430" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">ANTES DEL PRESUPUESTO</text>
    ${textLines({ lines: ['No necesitás', 'tener todo', 'definido.'], x: 72, y: 620, gap: 118, size: 112, accent: [2] })}
    <text x="72" y="1040" font-family="Bricolage" font-size="34" font-weight="300" fill="#6B5E4F">La primera conversación sirve para ordenar.</text>
    <g transform="translate(72 1190)">
      <path d="M40 0V260" stroke="${C.ink}" stroke-width="6"/>
      <circle cx="40" cy="0" r="28" fill="${C.accent}"/>
      <circle cx="40" cy="130" r="28" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="40" cy="260" r="28" fill="${C.ink}"/>
      <text x="100" y="14" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.ink}">CONTAR</text>
      <text x="100" y="144" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.ink}">ORDENAR</text>
      <text x="100" y="274" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.ink}">DEFINIR</text>
    </g>` }),
  story({ index: 2, label: 'BRIEF · INFORMACIÓN INICIAL', body: `
    ${textLines({ lines: ['Con tres datos', 'podemos empezar.'], x: 72, y: 480, gap: 118, size: 108, accent: [1] })}
    <g transform="translate(72 820)">
      ${[
        ['01', 'QUÉ HACE', 'tu negocio.'],
        ['02', 'QUÉ NECESITA', 'mostrar la web.'],
        ['03', 'PARA CUÁNDO', 'querés publicar.']
      ].map(([number, title, note], index) => `<g transform="translate(0 ${index * 205})"><rect width="890" height="165" rx="18" fill="${index === 1 ? C.ink : C.paper2}" stroke="${index === 1 ? C.ink : C.sand}" stroke-width="3"/><text x="34" y="56" font-family="Bricolage" font-size="19" font-weight="600" letter-spacing="3" fill="${C.accent}">${number}</text><text x="112" y="75" font-family="Bricolage" font-size="42" font-weight="800" fill="${index === 1 ? C.paper : C.ink}">${title}</text><text x="112" y="124" font-family="Bricolage" font-size="30" font-weight="300" fill="${index === 1 ? C.paperSoft : '#6B5E4F'}">${note}</text></g>`).join('')}
    </g>` }),
  story({ index: 3, dark: true, label: 'CONTACTO · DM', body: `
    <text x="72" y="430" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">EL RESTO LO ORDENAMOS JUNTOS</text>
    ${textLines({ lines: ['Tu idea puede', 'empezar con una', 'conversación.'], x: 72, y: 620, gap: 112, size: 100, fill: C.paper, accent: [2] })}
    <g transform="translate(72 1080)">
      <rect width="890" height="260" rx="28" fill="${C.paper}"/>
      <circle cx="58" cy="58" r="14" fill="${C.accent}"/>
      <text x="98" y="70" font-family="Bricolage" font-size="21" font-weight="600" letter-spacing="3" fill="${C.sand}">NUEVO MENSAJE</text>
      <text x="42" y="180" font-family="Bricolage" font-size="70" font-weight="800" fill="${C.ink}">WEB</text>
      <path d="M750 142H830M798 110L830 142 798 174" fill="none" stroke="${C.accent}" stroke-width="10"/>
    </g>
    <rect x="72" y="1430" width="720" height="106" rx="53" fill="${C.accent}"/>
    <text x="432" y="1498" text-anchor="middle" font-family="Bricolage" font-size="32" font-weight="600" fill="${C.paper}">ESCRIBINOS “WEB” POR DM →</text>` })
];

const renderPng = async (source, output) => {
  await runFile(chrome, [
    '--headless=new',
    '--hide-scrollbars',
    '--disable-gpu',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--window-size=1080,1920',
    `--screenshot=${output}`,
    `file://${source}`
  ]);
};

const renderSet = async (folder, items) => {
  const base = path.join(campaignRoot, folder);
  const sourceDir = path.join(base, 'source');
  const exportDir = path.join(base, 'exports');
  await mkdir(sourceDir, { recursive: true });
  await mkdir(exportDir, { recursive: true });
  for (const [index, markup] of items.entries()) {
    const number = String(index + 1).padStart(2, '0');
    const source = path.join(sourceDir, `${number}.svg`);
    const output = path.join(exportDir, `${number}.png`);
    await writeFile(source, markup);
    await renderPng(source, output);
    console.log(output);
  }
};

await renderSet('stories-landing-o-sitio', choiceStories);
await renderSet('stories-antes-del-presupuesto', briefStories);
