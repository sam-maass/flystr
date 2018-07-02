import React from 'react';
import { css } from 'emotion';
import SubHeadline from '../SubHeadline';
import FlowText from '../FlowText';
import PropTypes from 'prop-types';

const headlineStyle = css`
  font-weight: bold;
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
      <img src={icon} />
      <div className={headlineStyle}>
        <SubHeadline>{title}</SubHeadline>
      </div>
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
