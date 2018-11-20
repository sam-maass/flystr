import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { styles } from '../../styles';

const style = (color, variant) => {
  return css`
    border-bottom: ${thickness[variant]}px solid ${styles.colors[color]};
  `;
};

export const Underlined = ({
  children,
  color = 'orange',
  variant = 'medium'
}) => {
  return <div className={style(color, variant)}>{children}</div>;
};

const thickness = {
  small: 1,
  medium: 3
};

Underlined.propTypes = {
  children: PropTypes.element,
  color: PropTypes.oneOf(Object.keys(styles.colors)),
  variant: PropTypes.oneOf(Object.keys(thickness))
};
