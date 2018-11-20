import React from 'react';
import PropTypes from 'prop-types';

const style = ({ height, variant }) => {
  const lightLogo = `url("/logo.svg")`;
  const darkLogo = `url("/logo-dark.svg")`;
  const logoUrl = variant === 'light' ? lightLogo : darkLogo;
  return {
    backgroundImage: logoUrl,
    backgoundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    color: 'red',
    height,
    width: height * 4
  };
};

const LogoContainer = ({ height = 40, variant = 'light' }) => {
  return <div style={style({ height, variant })} />;
};

LogoContainer.propTypes = {
  height: PropTypes.number
};

export default LogoContainer;
