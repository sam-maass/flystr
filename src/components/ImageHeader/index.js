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
  height: 60px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom:20px;
`;

const ImageHeader = () => {
  return (
    <div className={header}>
      <div className={logoStyle} />
      <HugeHeadline withBar>
        select your destination<br/>
        we find the best flights
      </HugeHeadline>
    </div>
  );
};

ImageHeader.propTypes = {
  children: PropTypes.node
};

export default ImageHeader;
