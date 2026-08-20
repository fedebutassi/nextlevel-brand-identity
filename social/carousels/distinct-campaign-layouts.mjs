import { buildLogoImage } from './logo-assets.mjs';

const C = {
  ink: '#1A1410', paper: '#F1E8D8', paper2: '#E6DCC6', accent: '#D24322',
  sand: '#9D8B75', pale: '#C9B99F', white: '#FFF9EF'
};

const esc = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const fontStyles = `<style>
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-Bold.ttf');font-weight:800}
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-SemiBold.ttf');font-weight:600}
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-ExtraLight.ttf');font-weight:300}
</style>`;

const lines = (items, x, y, gap, attrs = '') => items.map((item, i) =>
  `<text x="${x}" y="${y + i * gap}" ${attrs}>${esc(item)}</text>`).join('');

const wrapped = (value, max = 34) => {
  const result = [];
  for (const word of String(value ?? '').split(' ')) {
    const candidate = `${result.at(-1) ?? ''} ${word}`.trim();
    if (!result.length || candidate.length > max) result.push(word);
    else result[result.length - 1] = candidate;
  }
  return result;
};

const detailRows = slide => {
  if (slide.type === 'comparison') return [
    `${slide.left.label} · ${slide.left.lines.join(' ')}`,
    `${slide.right.label} · ${slide.right.lines.join(' ')}`
  ];
  if (slide.type === 'rewrite') return [`ANTES · ${slide.before}`, `DESPUÉS · ${slide.after}`];
  if (slide.type === 'identity' || slide.type === 'journey') return slide.items;
  if (slide.type === 'foundation') return slide.items.map(item => `${item.label} · ${item.value}`);
  if (slide.type === 'case') return slide.caseItems;
  return [];
};

const svg = (background, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  ${fontStyles}<rect width="1080" height="1350" fill="${background}"/>${content}
</svg>`;

const logo = (x, y, dark = false) => buildLogoImage({ x, y, dark });

const diagnostic = (carousel, slide, index) => {
  const total = carousel.slides.length;
  if (slide.type === 'cta') return svg(C.accent, `
    ${logo(64, 54, true)}
    <text x="1016" y="78" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${C.paper}">CIERRE / 0${total}</text>
    <path d="M64 106H1016" stroke="${C.paper}" opacity=".45"/>
    ${lines(slide.title, 64, 410, 122, `font-family="Bricolage" font-size="108" font-weight="800" letter-spacing="-4" fill="${C.paper}"`)}
    <text x="64" y="720" font-family="Bricolage" font-size="36" font-weight="300" fill="${C.paper}">${esc(slide.note)}</text>
    <rect x="64" y="820" width="570" height="100" rx="8" fill="${C.ink}"/>
    <text x="349" y="885" text-anchor="middle" font-family="Bricolage" font-size="30" font-weight="600" fill="${C.paper}">${esc(slide.ctaLabel)}</text>
    <path d="M64 1170H1016" stroke="${C.paper}" stroke-dasharray="8 12" opacity=".55"/>
    <text x="64" y="1232" font-family="Bricolage" font-size="19" font-weight="600" letter-spacing="3" fill="${C.paper}">DIAGNÓSTICO NEXTLEVEL</text>`);

  const cover = slide.type === 'cover';
  const active = Math.max(0, slide.step ?? 0);
  const rows = cover ? carousel.decisions : detailRows(slide);
  const grid = Array.from({length: 11}, (_, i) => `<path d="M${64 + i * 95.2} 0V1350" stroke="${C.paper}" opacity=".045"/>`).join('');
  const rowMarkup = rows.map((row, i) => {
    const y = 800 + i * (cover ? 54 : 82);
    const selected = !cover && (i === 1 || rows.length === 1);
    return `<g><rect x="64" y="${y - 36}" width="${cover ? 390 : 700}" height="${cover ? 42 : 62}" fill="${selected ? C.accent : 'none'}" stroke="${cover ? C.sand : C.paper}" opacity="${selected ? 1 : .72}"/>
      <text x="82" y="${y - (cover ? 7 : 0)}" font-family="Bricolage" font-size="${cover ? 17 : 25}" font-weight="600" letter-spacing="${cover ? 2 : 0}" fill="${selected ? C.paper : C.paper}">${String(i + 1).padStart(2,'0')} · ${esc(row)}</text></g>`;
  }).join('');
  return svg(C.ink, `${grid}<rect x="0" width="18" height="1350" fill="${C.accent}"/>
    ${logo(64, 50, true)}
    <text x="1016" y="76" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${C.pale}">${String(index + 1).padStart(2,'0')} / 0${total}</text>
    <path d="M64 105H1016" stroke="${C.pale}" opacity=".5"/>
    <text x="64" y="210" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">${cover ? 'SEÑALES DE ALERTA' : esc(slide.kicker)}</text>
    ${lines(slide.title, 64, cover ? 360 : 330, cover ? 112 : 102, `font-family="Bricolage" font-size="${cover ? 102 : 92}" font-weight="800" letter-spacing="-4" fill="${C.paper}"`)}
    <text x="64" y="${cover ? 650 : 590}" font-family="Bricolage" font-size="31" font-weight="300" fill="${C.pale}">${esc(slide.note)}</text>
    ${!cover ? `<rect x="850" y="200" width="166" height="166" fill="${C.accent}"/><text x="933" y="312" text-anchor="middle" font-family="Bricolage" font-size="82" font-weight="800" fill="${C.paper}">${String(active + 1).padStart(2,'0')}</text>` : ''}
    ${rowMarkup}
    ${cover ? '<text x="64" y="1190" font-family="Bricolage" font-size="19" font-weight="600" letter-spacing="3" fill="#D24322">ABRIR DIAGNÓSTICO ↓</text>' : ''}
    <text x="1016" y="1300" text-anchor="end" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${C.pale}">CONSULTAS SIN FRICCIÓN</text>`);
};

const editorial = (carousel, slide, index) => {
  const total = carousel.slides.length;
  const dark = slide.type === 'cta';
  const bg = dark ? C.ink : (index % 2 ? C.white : C.paper);
  const fg = dark ? C.paper : C.ink;
  const titleX = index % 2 ? 190 : 64;
  const titleY = slide.type === 'cover' ? 385 : 330;
  const rows = slide.type === 'cover' ? carousel.decisions : detailRows(slide);
  const rowMarkup = rows.map((row, i) => `<g transform="translate(${titleX} ${760 + i * 74})">
    <circle cx="10" cy="-8" r="7" fill="${i === 1 ? C.accent : C.sand}"/>
    <text x="34" y="0" font-family="Bricolage" font-size="${slide.type === 'cover' ? 18 : 29}" font-weight="${i === 1 ? 800 : 300}" fill="${fg}">${esc(row)}</text>
  </g>`).join('');
  return svg(bg, `
    ${logo(64, 50, dark)}
    <text x="1016" y="77" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${dark ? C.pale : C.sand}">${String(index + 1).padStart(2,'0')} — ${String(total).padStart(2,'0')}</text>
    <text x="${index % 2 ? 18 : 790}" y="650" font-family="Bricolage" font-size="610" font-weight="800" fill="${C.accent}" opacity="${dark ? .14 : .09}">?</text>
    <text x="${titleX}" y="220" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="3" fill="${C.accent}">${slide.type === 'cover' ? 'SEIS PREGUNTAS NECESARIAS' : slide.type === 'cta' ? 'UNA ÚLTIMA PREGUNTA' : esc(slide.kicker)}</text>
    ${lines(slide.title, titleX, titleY, 112, `font-family="Bricolage" font-size="${slide.type === 'cta' ? 100 : 96}" font-weight="800" letter-spacing="-4" fill="${fg}"`)}
    <path d="M${titleX} 610H${index % 2 ? 1016 : 870}" stroke="${C.accent}" stroke-width="5"/>
    <text x="${titleX}" y="680" font-family="Bricolage" font-size="30" font-weight="300" fill="${dark ? C.pale : '#6B5E4F'}">${esc(slide.note)}</text>
    ${rowMarkup}
    ${slide.type === 'cta' ? `<rect x="${titleX}" y="880" width="510" height="94" rx="47" fill="${C.accent}"/><text x="${titleX + 255}" y="940" text-anchor="middle" font-family="Bricolage" font-size="28" font-weight="600" fill="${C.paper}">${esc(slide.ctaLabel)}</text>` : ''}
    <text x="64" y="1298" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${dark ? C.pale : C.sand}">NEXTLVL.COM.AR</text>`);
};

const checklist = (carousel, slide, index) => {
  const total = carousel.slides.length;
  const cover = slide.type === 'cover';
  const cta = slide.type === 'cta';
  const rows = cover ? carousel.decisions : detailRows(slide);
  const bg = cta ? C.paper2 : C.paper;
  const cardX = cover ? 94 : 64;
  const cardY = cover ? 215 : 180;
  const cardW = cover ? 890 : 952;
  const cardH = cta ? 980 : 1010;
  const checks = rows.map((row, i) => `<g transform="translate(${cardX + 52} ${cover ? 860 + i * 58 : 860 + i * 86})">
    <rect x="0" y="-28" width="34" height="34" fill="none" stroke="${!cover && i === 1 ? C.accent : C.ink}" stroke-width="3"/>
    ${!cover && i === 1 ? `<path d="M7 -10L15 -2 30 -22" fill="none" stroke="${C.accent}" stroke-width="5"/>` : ''}
    <text x="58" y="0" font-family="Bricolage" font-size="${cover ? 18 : 27}" font-weight="${!cover && i === 1 ? 800 : 600}" fill="${C.ink}">${esc(row)}</text>
  </g>`).join('');
  return svg(bg, `
    <rect x="${cardX + 18}" y="${cardY + 18}" width="${cardW}" height="${cardH}" rx="4" fill="${C.accent}"/>
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="4" fill="${C.white}" stroke="${C.ink}" stroke-width="3"/>
    <rect x="${cardX + cardW - 168}" y="${cardY - 24}" width="132" height="58" fill="${C.paper2}" stroke="${C.ink}" stroke-width="2" transform="rotate(3 ${cardX + cardW - 102} ${cardY + 5})"/>
    ${logo(cardX + 44, cardY + 42)}
    <text x="${cardX + cardW - 44}" y="${cardY + 70}" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${C.sand}">${String(index + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</text>
    <path d="M${cardX + 44} ${cardY + 108}H${cardX + cardW - 44}" stroke="${C.sand}" stroke-dasharray="4 8"/>
    <text x="${cardX + 44}" y="${cardY + 164}" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${C.accent}">${cover ? 'BRIEF INICIAL' : cta ? 'SIGUIENTE PASO' : esc(slide.kicker)}</text>
    ${lines(slide.title, cardX + 44, cardY + 285, 105, `font-family="Bricolage" font-size="${cover ? 88 : 82}" font-weight="800" letter-spacing="-3" fill="${C.ink}"`)}
    <text x="${cardX + 44}" y="${cardY + 545}" font-family="Bricolage" font-size="29" font-weight="300" fill="#6B5E4F">${esc(slide.note)}</text>
    <path d="M${cardX + 44} ${cardY + 610}H${cardX + cardW - 44}" stroke="${C.sand}"/>
    ${checks}
    ${cta ? `<rect x="${cardX + 44}" y="${cardY + 720}" width="610" height="94" fill="${C.ink}"/><text x="${cardX + 349}" y="${cardY + 782}" text-anchor="middle" font-family="Bricolage" font-size="28" font-weight="600" fill="${C.paper}">${esc(slide.ctaLabel)}</text><text x="${cardX + 44}" y="${cardY + 890}" font-family="Bricolage" font-size="20" font-weight="600" fill="${C.accent}">LISTO PARA CONVERSAR ✓</text>` : ''}
    <text x="64" y="1310" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${C.sand}">ANTES DEL PRESUPUESTO</text>`);
};

const splitChannels = (carousel, slide, index) => {
  const total = carousel.slides.length;
  const cta = slide.type === 'cta';
  const rows = detailRows(slide);
  const cover = slide.type === 'cover';
  const compactTitle = cover ? ['Instagram no', 'reemplaza'] : wrapped(slide.title.join(' '), 17);
  const channelWord = cover ? 'TU WEB.' : cta ? 'JUNTAS.' : `${carousel.decisions[slide.step ?? 0]}.`;
  const leftRows = cover ? carousel.decisions.slice(0, 3) : rows.filter((_, i) => i % 2 === 0);
  const rightRows = cover ? carousel.decisions.slice(3) : rows.filter((_, i) => i % 2 === 1);
  const left = leftRows.map((row, i) => `<text x="64" y="${850 + i * 74}" font-family="Bricolage" font-size="${cover ? 19 : 25}" font-weight="600" fill="${C.ink}">${String(i + 1).padStart(2,'0')} · ${esc(row)}</text>`).join('');
  const right = rightRows.map((row, i) => `<text x="590" y="${850 + i * 74}" font-family="Bricolage" font-size="${cover ? 19 : 25}" font-weight="600" fill="${C.paper}">${String(i + 1 + leftRows.length).padStart(2,'0')} · ${esc(row)}</text>`).join('');
  return svg(C.paper, `
    <rect x="540" width="540" height="1350" fill="${cta ? C.accent : C.ink}"/>
    <rect width="540" height="18" fill="${C.accent}"/><rect x="540" width="540" height="18" fill="${cta ? C.ink : C.accent}"/>
    ${logo(64, 52)}
    <text x="1016" y="78" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${C.paper}">${String(index + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</text>
    <text x="64" y="185" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${C.accent}">${cover ? 'DOS CANALES · DOS FUNCIONES' : cta ? 'HACERLOS TRABAJAR JUNTOS' : esc(slide.kicker)}</text>
    <text x="590" y="185" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${C.pale}">${cover ? 'ESPACIO PROPIO' : 'WEB / PROFUNDIDAD'}</text>
    ${lines(compactTitle, 64, 315, 82, `font-family="Bricolage" font-size="70" font-weight="800" letter-spacing="-3" fill="${C.ink}"`)}
    <text x="590" y="390" font-family="Bricolage" font-size="78" font-weight="800" letter-spacing="-3" fill="${C.paper}">${esc(channelWord)}</text>
    <circle cx="540" cy="640" r="68" fill="${C.accent}"/><path d="M510 640H570M554 624L570 640 554 656" fill="none" stroke="${C.paper}" stroke-width="6"/>
    ${lines(wrapped(slide.note, 28), 64, 650, 42, `font-family="Bricolage" font-size="30" font-weight="300" fill="#6B5E4F"`)}
    <text x="590" y="650" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${C.pale}">EXPLICA · ORDENA · GUÍA</text>
    ${left}${right}
    ${cta ? `<rect x="64" y="1010" width="420" height="90" rx="45" fill="${C.ink}"/><text x="274" y="1068" text-anchor="middle" font-family="Bricolage" font-size="27" font-weight="600" fill="${C.paper}">${esc(slide.ctaLabel)}</text>` : ''}
    <text x="64" y="1300" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${C.sand}">INSTAGRAM</text>
    <text x="1016" y="1300" text-anchor="end" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${C.pale}">TU WEB</text>`);
};

const roadmap = (carousel, slide, index) => {
  const total = carousel.slides.length;
  const cover = slide.type === 'cover';
  const cta = slide.type === 'cta';
  const active = slide.step ?? 0;
  const bg = cta ? C.paper : C.ink;
  const fg = cta ? C.ink : C.paper;
  const muted = cta ? C.sand : C.pale;
  const nodes = carousel.decisions.map((decision, i) => {
    const x = 104 + i * 174;
    const selected = !cover && !cta && i === active;
    return `<g><circle cx="${x}" cy="1100" r="${selected ? 35 : 22}" fill="${selected ? C.accent : bg}" stroke="${selected ? C.accent : muted}" stroke-width="3"/>
      <text x="${x}" y="1160" text-anchor="middle" font-family="Bricolage" font-size="13" font-weight="600" letter-spacing="1" fill="${selected ? C.accent : muted}">${esc(decision)}</text></g>`;
  }).join('');
  const rows = detailRows(slide);
  const rowMarkup = rows.map((row, i) => `<g transform="translate(120 ${760 + i * 78})"><circle cx="0" cy="-8" r="8" fill="${i === rows.length - 1 ? C.accent : muted}"/><text x="34" y="0" font-family="Bricolage" font-size="28" font-weight="${i === rows.length - 1 ? 800 : 300}" fill="${fg}">${esc(row)}</text></g>`).join('');
  const grid = Array.from({length: 8}, (_, i) => `<path d="M0 ${180 + i * 140}H1080" stroke="${muted}" opacity=".07"/>`).join('');
  return svg(bg, `${grid}
    ${logo(64, 52, !cta)}
    <text x="1016" y="77" text-anchor="end" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${muted}">${String(index + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</text>
    <path d="M64 108H1016" stroke="${muted}" opacity=".5"/>
    <text x="64" y="220" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="3" fill="${C.accent}">${cover ? 'NUESTRO RECORRIDO' : cta ? 'EMPEZAMOS POR TU IDEA' : esc(slide.kicker)}</text>
    ${lines(slide.title, 64, 365, 112, `font-family="Bricolage" font-size="${cta ? 100 : 98}" font-weight="800" letter-spacing="-4" fill="${fg}"`)}
    <text x="64" y="650" font-family="Bricolage" font-size="31" font-weight="300" fill="${muted}">${esc(slide.note)}</text>
    ${rowMarkup}
    <path d="M104 1100H974" stroke="${muted}" stroke-width="3" stroke-dasharray="7 9"/>
    ${nodes}
    ${cta ? `<rect x="64" y="790" width="610" height="98" rx="49" fill="${C.accent}"/><text x="369" y="853" text-anchor="middle" font-family="Bricolage" font-size="29" font-weight="600" fill="${C.paper}">${esc(slide.ctaLabel)}</text>` : ''}
    <text x="64" y="1300" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${muted}">UN PROCESO CLARO</text>`);
};

const builders = { diagnostic, editorial, checklist, split: splitChannels, roadmap };

export const buildDistinctCampaignSlide = (carousel, slide, index) => {
  const build = builders[carousel.artDirection];
  if (!build) throw new Error(`Dirección visual no soportada: ${carousel.artDirection}`);
  return build(carousel, slide, index);
};
