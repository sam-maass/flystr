import React, { PureComponent } from 'react';
import ImageHeader from '../components/ImageHeader';
import SubHeadline from '../components/SubHeadline';
import StepsGrid from '../components/StepsGrid';
import { css } from 'emotion';

const maxWidth = css`
  max-width: 1280px;
  margin: auto;
`;

class Landing extends PureComponent {
  render() {
    return (
      <div>
        <ImageHeader />
        <div className={maxWidth}>
          <SubHeadline withBar>how it works</SubHeadline>
          <StepsGrid />
          <SubHeadline withBar>deals we found last week</SubHeadline>
        </div>
      </div>
    );
  }
}

export default Landing;
