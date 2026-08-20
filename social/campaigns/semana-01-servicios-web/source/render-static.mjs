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

const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const textLines = ({ lines, x, y, gap, size, weight = 800, fill = C.ink, accent = [], anchor = 'start', spacing = -3 }) =>
  lines.map((line, index) => `<text x="${x}" y="${y + index * gap}" text-anchor="${anchor}" font-family="Bricolage" font-size="${size}" font-weight="${weight}" letter-spacing="${spacing}" fill="${accent.includes(index) ? C.accent : fill}">${esc(line)}</text>`).join('');

const logo = ({ dark = false, x = 64, y = 52, width = 164, height = 28 } = {}) =>
  `<image href="${assetRoot}assets/${dark ? 'logo-dark.svg' : 'logo.svg'}" x="${x}" y="${y}" width="${width}" height="${height}"/>`;

const svg = (width, height, background, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
${fontCss}<rect width="${width}" height="${height}" fill="${background}"/>${content}</svg>`;

const carouselFrame = ({ index, dark = false, body }) => {
  const fg = dark ? C.paper : C.ink;
  const muted = dark ? C.paperSoft : C.sand;
  return svg(1080, 1350, dark ? C.ink : C.paper, `
    ${logo({ dark })}
    <text x="1016" y="76" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${muted}">${String(index).padStart(2, '0')} / 08</text>
    <path d="M64 104H1016" stroke="${muted}" opacity=".55"/>
    ${body}
    <path d="M64 1292H1016" stroke="${muted}" opacity=".45"/>
    <text x="64" y="1324" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${muted}">LANDING · SERVICIO</text>
    <text x="1016" y="1324" text-anchor="end" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${muted}">NEXTLVL.OK</text>`);
};

const carousel = [
  carouselFrame({ index: 1, body: `
    <text x="64" y="198" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">UNA PÁGINA · UN RECORRIDO</text>
    ${textLines({ lines: ['¿Qué incluye', 'una landing', 'bien pensada?'], x: 64, y: 390, gap: 98, size: 94, accent: [1] })}
    <text x="64" y="740" font-family="Bricolage" font-size="30" font-weight="300" fill="#6B5E4F">Una estructura enfocada en una acción principal.</text>
    <g transform="translate(665 226)">
      <rect width="300" height="850" rx="12" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <rect x="28" y="35" width="122" height="18" fill="${C.ink}"/><circle cx="159" cy="44" r="8" fill="${C.accent}"/>
      <rect x="28" y="102" width="244" height="195" fill="${C.ink}"/>
      <rect x="52" y="142" width="180" height="24" fill="${C.paper}"/><rect x="52" y="180" width="120" height="18" fill="${C.accent}"/>
      <rect x="28" y="332" width="244" height="82" fill="none" stroke="${C.ink}" stroke-width="3"/>
      <rect x="28" y="444" width="112" height="160" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
      <rect x="160" y="444" width="112" height="160" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
      <rect x="28" y="636" width="244" height="92" rx="46" fill="${C.accent}"/>
      <path d="M82 680H218M194 656L218 680 194 704" fill="none" stroke="${C.paper}" stroke-width="6"/>
      <rect x="28" y="760" width="244" height="50" fill="none" stroke="${C.sand}" stroke-width="3"/>
    </g>
    <text x="64" y="1132" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${C.sand}">DESLIZÁ PARA VER EL ALCANCE →</text>` }),
  carouselFrame({ index: 2, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">01 · FUNCIÓN</text>
    ${textLines({ lines: ['Una página.', 'Un objetivo claro.'], x: 64, y: 400, gap: 112, size: 104, accent: [1] })}
    <text x="64" y="690" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">La estructura se concentra en una acción principal.</text>
    <g transform="translate(180 830)">
      <circle cx="220" cy="170" r="145" fill="none" stroke="${C.sand}" stroke-width="4"/>
      <circle cx="220" cy="170" r="88" fill="none" stroke="${C.ink}" stroke-width="8"/>
      <circle cx="220" cy="170" r="35" fill="${C.accent}"/>
      <path d="M410 170H720" stroke="${C.ink}" stroke-width="8"/><path d="M684 136L720 170 684 204" fill="none" stroke="${C.accent}" stroke-width="10"/>
      <text x="565" y="132" text-anchor="middle" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${C.sand}">UN PRÓXIMO PASO</text>
    </g>` }),
  carouselFrame({ index: 3, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">02 · NEGOCIO</text>
    ${textLines({ lines: ['Presentar', 'tu negocio.'], x: 64, y: 390, gap: 112, size: 108, accent: [1] })}
    <text x="64" y="665" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">Qué hacés, para quién y cómo trabajás.</text>
    <g transform="translate(64 790)">
      <rect width="952" height="350" rx="18" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <text x="42" y="62" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${C.sand}">FICHA DEL NEGOCIO</text>
      <path d="M42 92H910" stroke="${C.sand}"/>
      <text x="42" y="160" font-family="Bricolage" font-size="39" font-weight="800" fill="${C.ink}">QUÉ HACÉS</text>
      <text x="478" y="160" font-family="Bricolage" font-size="39" font-weight="800" fill="${C.ink}">PARA QUIÉN</text>
      <text x="42" y="255" font-family="Bricolage" font-size="39" font-weight="800" fill="${C.accent}">CÓMO TRABAJÁS</text>
      <circle cx="875" cy="252" r="34" fill="${C.accent}"/><path d="M859 252H891M879 240L891 252 879 264" stroke="${C.paper}" stroke-width="5" fill="none"/>
    </g>` }),
  carouselFrame({ index: 4, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">03 · OFERTA</text>
    ${textLines({ lines: ['Ordenar', 'lo que ofrecés.'], x: 64, y: 380, gap: 112, size: 106, accent: [1] })}
    <text x="64" y="655" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">Servicios, productos o una propuesta concreta.</text>
    <g transform="translate(64 800)">
      <rect width="720" height="86" fill="${C.ink}"/><text x="32" y="57" font-family="Bricolage" font-size="31" font-weight="800" fill="${C.paper}">PROPUESTA PRINCIPAL</text><text x="676" y="57" text-anchor="end" font-family="Bricolage" font-size="20" font-weight="600" fill="${C.accent}">01</text>
      <rect y="106" width="820" height="86" fill="${C.paper2}" stroke="${C.ink}" stroke-width="3"/><text x="32" y="162" font-family="Bricolage" font-size="31" font-weight="800" fill="${C.ink}">SERVICIOS O PRODUCTOS</text><text x="776" y="162" text-anchor="end" font-family="Bricolage" font-size="20" font-weight="600" fill="${C.accent}">02</text>
      <rect y="212" width="920" height="86" fill="${C.accent}"/><text x="32" y="268" font-family="Bricolage" font-size="31" font-weight="800" fill="${C.paper}">SIGUIENTE PASO</text><text x="876" y="268" text-anchor="end" font-family="Bricolage" font-size="20" font-weight="600" fill="${C.paper}">03</text>
    </g>` }),
  carouselFrame({ index: 5, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">04 · CONFIANZA</text>
    ${textLines({ lines: ['Mostrar', 'información real.'], x: 64, y: 380, gap: 112, size: 106, accent: [1] })}
    <text x="64" y="655" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">Trabajos, proceso, respuestas y contacto.</text>
    <g transform="translate(64 805)">
      ${['TRABAJOS', 'PROCESO', 'RESPUESTAS', 'CONTACTO'].map((item, i) => `<g transform="translate(${(i % 2) * 470} ${Math.floor(i / 2) * 145})"><rect width="438" height="118" rx="10" fill="${i === 3 ? C.ink : C.paper2}" stroke="${i === 3 ? C.ink : C.sand}" stroke-width="3"/><circle cx="48" cy="59" r="16" fill="${C.accent}"/><text x="82" y="69" font-family="Bricolage" font-size="31" font-weight="800" fill="${i === 3 ? C.paper : C.ink}">${item}</text></g>`).join('')}
    </g>` }),
  carouselFrame({ index: 6, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">05 · PRODUCCIÓN</text>
    ${textLines({ lines: ['Diseño', 'y desarrollo.'], x: 64, y: 380, gap: 112, size: 110, accent: [1] })}
    <text x="64" y="655" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">Responsive, formulario y configuración acordada.</text>
    <g transform="translate(64 790)">
      <rect width="450" height="355" rx="18" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <text x="35" y="60" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.sand}">DISEÑO</text>
      <rect x="35" y="98" width="380" height="65" fill="${C.ink}"/><rect x="35" y="190" width="172" height="115" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/><rect x="243" y="190" width="172" height="115" fill="${C.accent}"/>
      <rect x="502" width="450" height="355" rx="18" fill="${C.ink}"/>
      <text x="537" y="60" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.paperSoft}">DESARROLLO</text>
      <text x="537" y="140" font-family="Bricolage" font-size="29" font-weight="600" fill="${C.paper}">&lt;main&gt;</text><text x="585" y="196" font-family="Bricolage" font-size="29" font-weight="600" fill="${C.accent}">&lt;form /&gt;</text><text x="537" y="252" font-family="Bricolage" font-size="29" font-weight="600" fill="${C.paper}">&lt;/main&gt;</text>
    </g>` }),
  carouselFrame({ index: 7, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">06 · PLAZO Y REVISIONES</text>
    ${textLines({ lines: ['Hasta tres semanas.', 'Dos rondas de revisión.'], x: 64, y: 370, gap: 112, size: 88, accent: [1] })}
    <text x="64" y="650" font-family="Bricolage" font-size="29" font-weight="300" fill="#6B5E4F">El plazo comienza con contenidos, accesos y anticipo listos.</text>
    <g transform="translate(64 790)">
      <path d="M36 92H885" stroke="${C.ink}" stroke-width="6"/>
      ${['SEMANA 01', 'SEMANA 02', 'SEMANA 03'].map((label, i) => `<g transform="translate(${i * 310} 0)"><circle cx="36" cy="92" r="30" fill="${i === 2 ? C.accent : C.ink}"/><text x="36" y="99" text-anchor="middle" font-family="Bricolage" font-size="18" font-weight="800" fill="${C.paper}">${i + 1}</text><text x="36" y="158" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="2" fill="${C.sand}">${label}</text></g>`).join('')}
      <g transform="translate(0 235)"><rect width="435" height="90" rx="45" fill="${C.paper2}" stroke="${C.ink}" stroke-width="3"/><text x="217" y="57" text-anchor="middle" font-family="Bricolage" font-size="28" font-weight="800" fill="${C.ink}">REVISIÓN 01</text><rect x="467" width="435" height="90" rx="45" fill="${C.accent}"/><text x="684" y="57" text-anchor="middle" font-family="Bricolage" font-size="28" font-weight="800" fill="${C.paper}">REVISIÓN 02</text></g>
    </g>` }),
  carouselFrame({ index: 8, dark: true, body: `
    <text x="64" y="205" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">SIGUIENTE PASO</text>
    ${textLines({ lines: ['Tu proyecto puede', 'empezar con una', 'conversación.'], x: 64, y: 390, gap: 105, size: 94, fill: C.paper, accent: [2] })}
    <text x="64" y="765" font-family="Bricolage" font-size="31" font-weight="300" fill="${C.paperSoft}">No necesitás llegar con todo resuelto.</text>
    <g transform="translate(64 860)">
      <rect width="790" height="180" rx="24" fill="${C.paper}"/>
      <circle cx="62" cy="54" r="13" fill="${C.accent}"/>
      <text x="98" y="65" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="2" fill="${C.sand}">NUEVO MENSAJE</text>
      <text x="42" y="135" font-family="Bricolage" font-size="38" font-weight="800" fill="${C.ink}">WEB</text>
      <path d="M675 90H735M711 66L735 90 711 114" fill="none" stroke="${C.accent}" stroke-width="8"/>
    </g>
    <rect x="64" y="1090" width="630" height="100" rx="50" fill="${C.accent}"/>
    <text x="379" y="1154" text-anchor="middle" font-family="Bricolage" font-size="30" font-weight="600" fill="${C.paper}">ESCRIBINOS “WEB” POR DM →</text>` })
];

const storyFrame = ({ index, total, dark = false, label, body }) => {
  const fg = dark ? C.paper : C.ink;
  const muted = dark ? C.paperSoft : C.sand;
  return svg(1080, 1920, dark ? C.ink : C.paper, `
    ${logo({ dark, x: 72, y: 172, width: 190, height: 33 })}
    <text x="1008" y="198" text-anchor="end" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${muted}">${String(index).padStart(2, '0')} / ${String(total).padStart(2, '0')}</text>
    <path d="M72 230H1008" stroke="${muted}" opacity=".5"/>
    ${body}
    <text x="72" y="1730" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${muted}">${esc(label)}</text>
    <path d="M72 1760H1008" stroke="${muted}" opacity=".35"/>
    <text x="1008" y="1810" text-anchor="end" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${muted}">@NEXTLVL.OK</text>`);
};

const diagnosticStories = [
  storyFrame({ index: 1, total: 3, label: 'DIAGNÓSTICO · PRESENCIA WEB', body: `
    ${textLines({ lines: ['Tu negocio,', '¿ya tiene una', 'web propia?'], x: 72, y: 510, gap: 118, size: 112, accent: [2] })}
    <text x="72" y="970" font-family="Bricolage" font-size="29" font-weight="300" fill="#6B5E4F">Queremos entender desde dónde estás empezando.</text>
    <path d="M72 1110H760" stroke="${C.accent}" stroke-width="6"/>
    <text x="72" y="1170" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">RESPONDÉ ACÁ ↓</text>` }),
  storyFrame({ index: 2, total: 3, label: 'DOS CANALES · DOS FUNCIONES', body: `
    ${textLines({ lines: ['Instagram y una web', 'cumplen funciones', 'distintas.'], x: 72, y: 430, gap: 104, size: 88, accent: [1] })}
    <g transform="translate(72 850)">
      <rect width="438" height="480" rx="20" fill="${C.paper2}" stroke="${C.ink}" stroke-width="4"/>
      <text x="34" y="68" font-family="Bricolage" font-size="19" font-weight="600" letter-spacing="3" fill="${C.accent}">INSTAGRAM</text>
      <text x="34" y="170" font-family="Bricolage" font-size="54" font-weight="800" fill="${C.ink}">GENERA</text><text x="34" y="226" font-family="Bricolage" font-size="54" font-weight="800" fill="${C.ink}">DESCUBRIMIENTO.</text>
      <circle cx="350" cy="370" r="54" fill="${C.accent}"/><path d="M323 370H377M355 348L377 370 355 392" fill="none" stroke="${C.paper}" stroke-width="7"/>
      <rect x="470" width="438" height="480" rx="20" fill="${C.ink}"/>
      <text x="504" y="68" font-family="Bricolage" font-size="19" font-weight="600" letter-spacing="3" fill="${C.accent}">TU WEB</text>
      <text x="504" y="170" font-family="Bricolage" font-size="54" font-weight="800" fill="${C.paper}">ORDENA</text><text x="504" y="226" font-family="Bricolage" font-size="54" font-weight="800" fill="${C.paper}">TU PROPUESTA.</text>
      <text x="504" y="350" font-family="Bricolage" font-size="29" font-weight="300" fill="${C.paperSoft}">Servicios, trabajos</text><text x="504" y="390" font-family="Bricolage" font-size="29" font-weight="300" fill="${C.paperSoft}">y contacto.</text>
    </g>` }),
  storyFrame({ index: 3, total: 3, label: 'ESTA SEMANA · LANDINGS', body: `
    <text x="72" y="420" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">PRÓXIMO TEMA</text>
    ${textLines({ lines: ['Esta semana', 'vamos a mostrar', 'qué puede resolver', 'una landing.'], x: 72, y: 590, gap: 108, size: 92, accent: [3] })}
    <g transform="translate(72 1130)"><rect width="880" height="250" rx="20" fill="${C.paper2}"/><rect x="36" y="38" width="500" height="28" fill="${C.ink}"/><rect x="36" y="92" width="360" height="18" fill="${C.sand}"/><rect x="36" y="150" width="235" height="65" rx="33" fill="${C.accent}"/><path d="M176 182H231M209 164L231 182 209 200" fill="none" stroke="${C.paper}" stroke-width="6"/></g>` })
];

const conversionStories = [
  storyFrame({ index: 1, total: 3, label: 'PRIMER PASO · CONVERSACIÓN', body: `
    ${textLines({ lines: ['¿Estás pensando', 'en una web y', 'no sabés por', 'dónde empezar?'], x: 72, y: 470, gap: 108, size: 96, accent: [3] })}
    <g transform="translate(72 1080)"><circle cx="100" cy="100" r="72" fill="${C.ink}"/><text x="100" y="118" text-anchor="middle" font-family="Bricolage" font-size="58" font-weight="800" fill="${C.paper}">?</text><path d="M205 100H780" stroke="${C.ink}" stroke-width="7" stroke-dasharray="12 18"/><circle cx="828" cy="100" r="72" fill="${C.accent}"/><path d="M795 100H857M832 76L857 100 832 124" fill="none" stroke="${C.paper}" stroke-width="8"/></g>` }),
  storyFrame({ index: 2, total: 3, label: 'ORDENAR ANTES DE CONSTRUIR', body: `
    ${textLines({ lines: ['No necesitás llegar', 'con todo resuelto.'], x: 72, y: 470, gap: 112, size: 100, accent: [1] })}
    <text x="72" y="780" font-family="Bricolage" font-size="31" font-weight="300" fill="#6B5E4F">Primero ordenamos tres decisiones.</text>
    <g transform="translate(72 920)">
      ${['OBJETIVO', 'ALCANCE', 'PRIORIDADES'].map((item, i) => `<g transform="translate(0 ${i * 170})"><rect width="890" height="132" rx="14" fill="${i === 1 ? C.accent : i === 2 ? C.ink : C.paper2}" stroke="${i === 0 ? C.ink : 'none'}" stroke-width="3"/><text x="40" y="84" font-family="Bricolage" font-size="48" font-weight="800" fill="${i === 0 ? C.ink : C.paper}">${String(i + 1).padStart(2, '0')} · ${item}</text></g>`).join('')}
    </g>` }),
  storyFrame({ index: 3, total: 3, dark: true, label: 'CONTACTO · DM', body: `
    <text x="72" y="430" font-family="Bricolage" font-size="20" font-weight="600" letter-spacing="4" fill="${C.accent}">CONTANOS QUÉ NECESITÁS</text>
    ${textLines({ lines: ['Tu proyecto puede', 'empezar con una', 'conversación.'], x: 72, y: 610, gap: 112, size: 98, fill: C.paper, accent: [2] })}
    <g transform="translate(72 1080)"><rect width="890" height="260" rx="28" fill="${C.paper}"/><circle cx="58" cy="58" r="14" fill="${C.accent}"/><text x="98" y="70" font-family="Bricolage" font-size="21" font-weight="600" letter-spacing="3" fill="${C.sand}">NUEVO MENSAJE</text><text x="42" y="180" font-family="Bricolage" font-size="70" font-weight="800" fill="${C.ink}">WEB</text><path d="M750 142H830M798 110L830 142 798 174" fill="none" stroke="${C.accent}" stroke-width="10"/></g>
    <rect x="72" y="1430" width="720" height="106" rx="53" fill="${C.accent}"/>
    <text x="432" y="1498" text-anchor="middle" font-family="Bricolage" font-size="32" font-weight="600" fill="${C.paper}">ESCRIBINOS “WEB” POR DM →</text>` })
];

const renderPng = async (source, output, width, height) => {
  await runFile(chrome, [
    '--headless=new', '--hide-scrollbars', '--disable-gpu', '--allow-file-access-from-files',
    '--force-device-scale-factor=1', `--window-size=${width},${height}`, `--screenshot=${output}`, `file://${source}`
  ]);
};

const renderSet = async (folder, items, width, height) => {
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
    await renderPng(source, output, width, height);
    console.log(output);
  }
};

await renderSet('stories-diagnostico', diagnosticStories, 1080, 1920);
await renderSet('carrusel-que-incluye-una-landing', carousel, 1080, 1350);
await renderSet('stories-conversion', conversionStories, 1080, 1920);

