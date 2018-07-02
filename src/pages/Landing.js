import React from 'react';
import ImageHeader from '../components/ImageHeader';
import SubHeadline from '../components/SubHeadline';
import StepsGrid from '../components/StepsGrid';
import { css } from 'emotion';
import DealCardGrid from '../components/DealCardGrid';
import BetaSignupForm from '../components/BetaSignupForm';

const maxWidth = css`
  max-width: 1280px;
  margin: auto;
`;

const Landing = () => {
  return (
    <div>
      <ImageHeader />
      <div className={maxWidth}>
        <SubHeadline withBar>how it works</SubHeadline>
        <StepsGrid />
        <SubHeadline withBar>deals we found last week</SubHeadline>
        <DealCardGrid />
        <SubHeadline withBar>try flystr</SubHeadline>
        <BetaSignupForm />
      </div>
    </div>
  );
};

export default Landing;
