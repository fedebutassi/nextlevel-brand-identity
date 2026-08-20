import { buildLogoImage } from './logo-assets.mjs';

const COLORS = {
  ink: '#1A1410',
  paper: '#F1E8D8',
  paper2: '#E6DCC6',
  accent: '#D24322',
  sand: '#9D8B75'
};

const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const textLines = (lines, x, y, gap, attributes = '') => lines
  .map((line, index) => `<text x="${x}" y="${y + index * gap}" ${attributes}>${escapeXml(line)}</text>`)
  .join('');

const fontStyles = `<style>
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-Bold.ttf');font-weight:800}
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-SemiBold.ttf');font-weight:600}
  @font-face{font-family:Bricolage;src:url('../../../../fonts/BricolageGrotesque_24pt_Condensed-ExtraLight.ttf');font-weight:300}
</style>`;

const buildProgress = (decisions, active, dark, y = 132) => {
  const foreground = dark ? COLORS.paper : COLORS.ink;
  const muted = dark ? '#B7A892' : COLORS.sand;
  return decisions.map((decision, index) => {
    const x = 64 + index * 159;
    const selected = index === active;
    return `<g transform="translate(${x} ${y})">
      <rect width="143" height="54" rx="27" fill="${selected ? COLORS.accent : 'none'}" stroke="${selected ? COLORS.accent : muted}" stroke-width="1.5" opacity="${selected ? 1 : .7}"/>
      <text x="71.5" y="34" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="600" letter-spacing="1.2" fill="${selected ? COLORS.paper : foreground}">${String(index + 1).padStart(2, '0')} · ${escapeXml(decision)}</text>
    </g>`;
  }).join('');
};

const buildFrame = (carousel, index, dark, content, active) => {
  const background = dark ? COLORS.ink : COLORS.paper;
  const foreground = dark ? COLORS.paper : COLORS.ink;
  const muted = dark ? '#B7A892' : COLORS.sand;
  const progress = Number.isInteger(active) ? buildProgress(carousel.decisions, active, dark) : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
    ${fontStyles}
    <rect width="1080" height="1350" fill="${background}"/>
    ${buildLogoImage({ dark })}
    <g font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${muted}">
      <text x="1016" y="75" text-anchor="end">${String(index + 1).padStart(2, '0')} / ${String(carousel.slides.length).padStart(2, '0')}</text>
      <path d="M64 96H1016M64 1294H1016" stroke="${muted}" stroke-width="1.5" opacity=".55"/>
      <text x="64" y="1330">NEXTLVL.COM.AR</text>
      <text x="1016" y="1330" text-anchor="end">${escapeXml(carousel.label)}</text>
    </g>
    ${progress}
    <g fill="${foreground}">${content}</g>
  </svg>`;
};

const buildHeading = (slide, dark, fallbackSize = 102) => {
  const size = slide.titleSize ?? fallbackSize;
  const foreground = dark ? COLORS.paper : COLORS.ink;
  const lines = slide.title.map((line, index) => `<text x="64" y="${345 + index * 112}" fill="${index === slide.accent ? COLORS.accent : foreground}">${escapeXml(line)}</text>`).join('');
  return `<text x="64" y="242" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="2.5" fill="${dark ? '#B7A892' : COLORS.sand}">${escapeXml(slide.kicker ?? '')}</text>
    <g font-family="Bricolage" font-size="${size}" font-weight="800" letter-spacing="-4">${lines}</g>
    <text x="64" y="610" font-family="Bricolage" font-size="31" font-weight="300" fill="${dark ? '#B7A892' : '#6B5E4F'}">${escapeXml(slide.note)}</text>`;
};

const buildCover = (carousel, slide, index) => {
  const map = buildProgress(carousel.decisions, -1, false, 1010);
  const titleSize = slide.titleSize ?? 108;
  const content = `${textLines(slide.title, 64, 360, 118, `font-family="Bricolage" font-size="${titleSize}" font-weight="800" letter-spacing="-4"`)}
    <text x="64" y="650" font-family="Bricolage" font-size="40" font-weight="600" fill="${COLORS.accent}">${escapeXml(slide.note)}</text>
    <path d="M80 957H1000" stroke="${COLORS.sand}" stroke-width="2" stroke-dasharray="5 12" opacity=".6"/>
    ${map}
    <text x="64" y="1168" font-family="Bricolage" font-size="18" font-weight="600" letter-spacing="3" fill="${COLORS.sand}">↳ DESLIZÁ →</text>`;
  return buildFrame(carousel, index, false, content);
};

const card = (x, label, lines, highlighted = false) => `<g transform="translate(${x} 720)">
  <rect width="460" height="290" rx="24" fill="${highlighted ? COLORS.ink : COLORS.paper2}" stroke="${highlighted ? COLORS.ink : COLORS.sand}" stroke-width="1.5"/>
  <text x="34" y="54" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${highlighted ? COLORS.accent : COLORS.sand}">${escapeXml(label)}</text>
  ${textLines(lines, 34, 132, 58, `font-family="Bricolage" font-size="48" font-weight="800" fill="${highlighted ? COLORS.paper : COLORS.ink}"`)}
</g>`;

const buildComparison = slide => `${buildHeading(slide, false)}${card(64, slide.left.label, slide.left.lines)}${card(556, slide.right.label, slide.right.lines, true)}`;

const buildRewrite = slide => `${buildHeading(slide, false)}
  <g transform="translate(64 710)">
    <rect width="952" height="310" rx="24" fill="${COLORS.ink}"/>
    <circle cx="34" cy="34" r="7" fill="${COLORS.accent}"/><circle cx="58" cy="34" r="7" fill="${COLORS.paper2}"/><circle cx="82" cy="34" r="7" fill="${COLORS.sand}"/>
    <text x="34" y="112" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${COLORS.sand}">ANTES</text>
    <text x="170" y="114" font-family="Bricolage" font-size="34" font-weight="300" fill="${COLORS.paper}">${escapeXml(slide.before)}</text>
    <path d="M34 154H918" stroke="${COLORS.sand}" opacity=".35"/>
    <text x="34" y="226" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${COLORS.accent}">DESPUÉS</text>
    <text x="170" y="228" font-family="Bricolage" font-size="40" font-weight="800" fill="${COLORS.paper}">${escapeXml(slide.after)}</text>
  </g>`;

const buildIdentity = slide => `${buildHeading(slide, true)}
  <g transform="translate(64 760)">${slide.items.map((item, index) => `<g transform="translate(${index * 318} 0)">
    <rect width="292" height="190" rx="20" fill="${index === 1 ? COLORS.accent : COLORS.paper}"/>
    <text x="146" y="86" text-anchor="middle" font-family="Bricolage" font-size="17" font-weight="600" letter-spacing="1.7" fill="${index === 1 ? COLORS.paper : COLORS.sand}">${String(index + 1).padStart(2, '0')}</text>
    <text x="146" y="130" text-anchor="middle" font-family="Bricolage" font-size="26" font-weight="800" fill="${index === 1 ? COLORS.paper : COLORS.ink}">${escapeXml(item)}</text>
  </g>`).join('')}</g>`;

const buildJourney = slide => `${buildHeading(slide, false)}
  <g transform="translate(64 800)">${slide.items.map((item, index) => `<g transform="translate(${index * 238} 0)">
    ${index > 0 ? '<path d="M-70 58H-16" stroke="#D24322" stroke-width="4"/><path d="M-24 48L-14 58-24 68" fill="none" stroke="#D24322" stroke-width="4"/>' : ''}
    <circle cx="92" cy="58" r="58" fill="${index === slide.items.length - 1 ? COLORS.accent : COLORS.paper2}"/>
    <text x="92" y="66" text-anchor="middle" font-family="Bricolage" font-size="18" font-weight="800" fill="${index === slide.items.length - 1 ? COLORS.paper : COLORS.ink}">${escapeXml(item)}</text>
  </g>`).join('')}</g>`;

const buildFoundation = slide => `${buildHeading(slide, false)}
  <g transform="translate(64 750)">${slide.items.map((item, index) => `<g transform="translate(${index * 318} ${index * 28})">
    <rect width="292" height="224" rx="20" fill="${index === 2 ? COLORS.ink : COLORS.paper2}" stroke="${COLORS.sand}" stroke-width="1.5"/>
    <text x="28" y="56" font-family="Bricolage" font-size="15" font-weight="600" letter-spacing="2" fill="${index === 2 ? COLORS.accent : COLORS.sand}">${escapeXml(item.label)}</text>
    <text x="28" y="142" font-family="Bricolage" font-size="47" font-weight="800" fill="${index === 2 ? COLORS.paper : COLORS.ink}">${escapeXml(item.value)}</text>
  </g>`).join('')}</g>`;

const buildCase = slide => `${buildHeading(slide, false, 96)}
  <g transform="translate(64 710)">
    <rect width="418" height="330" rx="24" fill="${COLORS.ink}"/>
    <text x="30" y="54" font-family="Bricolage" font-size="16" font-weight="600" letter-spacing="2" fill="${COLORS.accent}">${escapeXml(slide.caseLabel)}</text>
    ${slide.caseItems.map((item, index) => `<text x="30" y="${128 + index * 68}" font-family="Bricolage" font-size="32" font-weight="600" fill="${COLORS.paper}">0${index + 1}. ${escapeXml(item)}</text>`).join('')}
  </g>
  <g transform="translate(520 680)"><rect width="496" height="390" rx="24" fill="${COLORS.paper2}"/>
    <image href="${slide.caseAsset ?? '../../../reels/assets/mockups/ayres-hero.svg'}" x="20" y="12" width="456" height="365" preserveAspectRatio="xMidYMid meet"/>
  </g>`;

const buildCta = (carousel, slide, index) => {
  const titleSize = slide.titleSize ?? 108;
  const content = `${textLines(slide.title, 64, 390, 118, `font-family="Bricolage" font-size="${titleSize}" font-weight="800" letter-spacing="-4"`)}
    <text x="64" y="710" font-family="Bricolage" font-size="38" font-weight="300" fill="#B7A892">${escapeXml(slide.note)}</text>
    <rect x="64" y="820" width="520" height="96" rx="48" fill="${COLORS.accent}"/>
    <text x="324" y="881" text-anchor="middle" font-family="Bricolage" font-size="30" font-weight="600" fill="${COLORS.paper}">${escapeXml(slide.ctaLabel)}</text>
    <text x="64" y="1000" font-family="Bricolage" font-size="24" font-weight="600" fill="${COLORS.paper}">@nextlvl.ok</text>`;
  return buildFrame(carousel, index, true, content);
};

export const buildConnectedDecisionsSlide = (carousel, slide, index) => {
  if (slide.type === 'cover') return buildCover(carousel, slide, index);
  if (slide.type === 'cta') return buildCta(carousel, slide, index);
  const dark = slide.type === 'identity';
  const builders = { comparison: buildComparison, rewrite: buildRewrite, identity: buildIdentity, journey: buildJourney, foundation: buildFoundation, case: buildCase };
  const buildContent = builders[slide.type];
  if (!buildContent) throw new Error(`Layout no soportado: ${slide.type}`);
  return buildFrame(carousel, index, dark, buildContent(slide), slide.step);
};
