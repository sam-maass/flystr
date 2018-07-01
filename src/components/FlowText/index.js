import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const textStyle = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 33px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;
`;

const FlowText = props => <div className={textStyle}>{props.children}</div>;
FlowText.propTypes = {
  children: PropTypes.node.isRequired
};

export default FlowText;
