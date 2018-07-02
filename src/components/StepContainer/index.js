import React from 'react';
import { css } from 'emotion';
import FlowText from '../FlowText';
import PropTypes from 'prop-types';
import { classes } from '../../styles';

const headlineStyle = css`
  ${classes.typography.h2} font-weight: bold;
`;
const containerStyle = css`
  display: grid;
  grid-template-rows: 100px;
  width: 400px;
  text-align: center;
  grid-gap: 16px;
  justify-items: center;
`;

const StepContainer = ({ title, text, icon }) => {
  return (
    <div className={containerStyle}>
      <img src={icon} alt="icon" />
      <div className={headlineStyle}>{title}</div>
      <FlowText>{text}</FlowText>
    </div>
  );
};

StepContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired
};

export default StepContainer;
