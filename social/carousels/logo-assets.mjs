const LOGO_ROOT = '../../../../assets';

export const logoAssetHref = dark => `${LOGO_ROOT}/${dark ? 'logo-dark.svg' : 'logo.svg'}`;

export const buildLogoImage = ({ dark = false, x = 64, y = 48, width = 164, height = 28 } = {}) =>
  `<image href="${logoAssetHref(dark)}" x="${x}" y="${y}" width="${width}" height="${height}"/>`;
