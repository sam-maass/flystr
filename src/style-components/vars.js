const BASE_FONT_SIZE = 16;

export const padding = { base: '8px' };
export const color = {
  primary: '#2E6171',
  yellow: '#E9D985',
  red: '#DA2C38',
  green: '#57A773',
  darkgray: 'rgba(39,40,56,1)',
  darkgrayTransparent: 'rgba(39,40,56,0.75)'
};
export const fontSize = {
  xxlarge: 3.998 * BASE_FONT_SIZE + 'px',
  xlarge: 2.827 * BASE_FONT_SIZE + 'px',
  large: 1.999 * BASE_FONT_SIZE + 'px',
  medium: 1.414 * BASE_FONT_SIZE + 'px',
  base: BASE_FONT_SIZE + 'px'
};
export const lineHeight = {
  xxlarge: 1.2,
  xlarge: 1.2,
  large: 1.2,
  medium: 1.45,
  base: 1.45
};

export const typo = {
  heading: `font-size: ${fontSize.normal}; color: ${color.primary}; line-height: ${lineHeight.medium}; font-family: 'Comfortaa', sans-serif; font-weight:bold; letter-spacing: 1px;`,
  normal: `font-size: ${fontSize.base}; color: ${color.primary}; line-height: ${lineHeight.base}; font-family: 'Raleway', sans-serif;`
};
