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
    h1: css`
      color: ${styles.colors.darkGray};
      font-family: 'Comfortaa';
      font-size: 36px;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 50px;
      margin-bottom: 8px;
      text-transform: uppercase;
    `,

    h2: css`
      color: ${styles.colors.darkGray};
      font-family: 'Comfortaa';
      font-style: normal;
      line-height: 33px;
      font-size: 36px;
      margin-bottom: 8px;
      letter-spacing: 0.1em;
    `,

    title: css`
      color: ${styles.colors.darkGray};
      font-family: 'Comfortaa';
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
      line-height: normal;
    `,

    base: css`
      color: ${styles.colors.darkGray};
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.05em;
      line-height: 1.6em;
    `
  }
};
