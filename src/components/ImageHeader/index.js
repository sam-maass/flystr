import React from 'react';
import bgImage from '../../images/landing.jpg';
import logo from '../../images/logo3.png';
import { css } from 'emotion';
import PropTypes from 'prop-types';

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
`;

const ImageHeader = props => {
  return (
    <div className={header}>
      <div className={logoStyle} />
      {props.children}
    </div>
  );
};

ImageHeader.propTypes = {
  children: PropTypes.node
};

export default ImageHeader;
