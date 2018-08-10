import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import HugeHeadline from '../HugeHeadline';

const header = css`
  height: 300px;
  background-image: url('/landing.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  padding: 10px;
  display: grid;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'logo'
    'headline'
    '.';
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 150px 1fr 150px;
    height: 30vw;
    max-height: 33vh;
    grid-template-areas:
      'logo . .'
      '. headline .'
      '. . .';
  }
  .headline {
    grid-area: headline;
    justify-self: center;
    align-self: center;
  }
  .logo {
    grid-area: logo;
    width: 150px;
    height: 50px;
    margin: auto;
    background-image: url('/logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    @media only screen and (min-width: 1024px) {
      width: 300px;
      margin-left: 0;
    }
  }
`;

const ImageHeader = () => {
  return (
    <div className={header}>
      <div className="logo" />
      <div className="headline">
        <HugeHeadline withBar>
          select your destination
          <br />
          we find the best flights
        </HugeHeadline>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  children: PropTypes.node
};

export default ImageHeader;
