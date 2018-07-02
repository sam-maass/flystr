import React from 'react';
import bgImage from '../../images/landing.jpg';
import logo from '../../images/logo3.png';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import HugeHeadline from '../HugeHeadline';

const header = css`
  height: 300px;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  padding: 10px;
`;

const logoStyle = css`
  width: 150px;
  height: 50px;
  margin: auto;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  @media only screen and (min-width: 1024px) {
    width: 300px;
    margin-left: 0;
  }
`;

const ImageHeader = () => {
  return (
    <div className={header}>
      <div className={logoStyle} />
      <HugeHeadline withBar>
        select your destination<br />
        we find the best flights
      </HugeHeadline>
    </div>
  );
};

ImageHeader.propTypes = {
  children: PropTypes.node
};

export default ImageHeader;
