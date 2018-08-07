import React from 'react';
import PropTypes from 'prop-types';

const style = ({ height }) => {
  return {
    backgroundImage: 'url("/logo.svg")',
    backgoundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    color: 'red',
    height,
    width: height * 4
  };
};

const LogoContainer = ({ height = 40 }) => {
  return <div style={style({ height })} />;
};

LogoContainer.propTypes = {
  height: PropTypes.number
};

export default LogoContainer;
