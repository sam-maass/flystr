import { css } from 'emotion';

export const styles = {
  colors: {
    darkGray: '#263238',
    midGray: '#607D8B',
    lightGray: '#90A4AE',
    orange: '#FF6D00',
    green1: '#CDDC39',
    green2: '#8BC34A',
    green3: '#009688',
    blue1: '#00BCD4',
    blue2: '#2196F3',
    blue3: '#0288D1',
    blue4: '#42A5F5',
    white: '#FAFAFA'
  }
};

export const classes = {
  typography: {
    title: css`
      font-family: Comfortaa;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 18px;
      letter-spacing: 0.1em;
      color: ${styles.colors.darkGray};
    `,

    base: css`
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: 1.6em;
      font-size: 16px;
      letter-spacing: 0.05em;
      color: ${styles.colors.darkGray};
    `
  }
};
