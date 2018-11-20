import React from 'react';
import { css } from 'emotion';
import { styles } from '../../styles';
import PropTypes from 'prop-types';

const style = variant => `
    ${typography[variant]}
`;

export function Typography({ variant = 'base', children }) {
  return <span className={style(variant)}>{children}</span>;
}

const typography = {
  h1: css`
    color: ${styles.colors.darkGray};
    font-family: 'Comfortaa';
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    margin-bottom: 8px;
    text-transform: uppercase;
    @media only screen and (min-width: 1024px) {
      font-size: 36px;
    }
  `,

  h2: css`
    color: ${styles.colors.darkGray};
    font-family: 'Comfortaa';
    font-style: normal;
    line-height: 1.7em;
    font-size: 24px;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
    @media only screen and (min-width: 1024px) {
      font-size: 36px;
    }
  `,
  h3: css`
    color: ${styles.colors.darkGray};
    font-family: 'Comfortaa';
    font-style: normal;
    line-height: 1.7em;
    font-size: 20px;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
    @media only screen and (min-width: 1024px) {
      font-size: 24px;
    }
  `,
  h4: css`
    color: ${styles.colors.darkGray};
    font-family: 'Comfortaa';
    font-style: normal;
    line-height: 1.7em;
    font-size: 18px;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
  `,

  title: css`
    color: ${styles.colors.darkGray};
    font-family: 'Comfortaa';
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    line-height: normal;
  `,

  base: css`
    color: ${styles.colors.darkGray};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
  `
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(typography)),
  children: PropTypes.element
};
