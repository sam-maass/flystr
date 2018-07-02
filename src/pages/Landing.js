import React from 'react';
import ImageHeader from '../components/ImageHeader';
import SubHeadline from '../components/SubHeadline';
import StepsGrid from '../components/StepsGrid';
import { css } from 'emotion';
import DealCardGrid from '../components/DealCardGrid';
import BetaSignupForm from '../components/BetaSignupForm';
import Footer from '../components/Footer';

const maxWidth = css`
  max-width: 100vw;
  width: 1280px;
  overflow: hidden;
  margin: auto;
  padding: 0 8px 0 8px;
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
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
