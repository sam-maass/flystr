import React from 'react';
import { css } from 'emotion';
import FlowText from '../FlowText';
import PropTypes from 'prop-types';

const containerStyle = css`
  display: grid;
  grid-template-rows: 100px;
  max-width: 400px;
  text-align: center;
  grid-gap: 16px;
  justify-items: center;
  margin-bottom: 16px;
`;

const StepContainer = ({ title, text, icon }) => {
  return (
    <div className={containerStyle}>
      <img src={icon} alt="icon" />
      <h3 className="h3-text">{title}</h3>
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
