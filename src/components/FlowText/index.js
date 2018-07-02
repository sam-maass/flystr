import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { styles } from '../../styles';

const textStyle = css`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1.6em;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${styles.colors.darkGray};
`;

const FlowText = props => <div className={textStyle}>{props.children}</div>;
FlowText.propTypes = {
  children: PropTypes.node.isRequired
};

export default FlowText;
