import React from 'react';
import HeaderContainer from '../Header/index';
import styled from 'styled-components';

const ImageHeaderElement = styled.div`
  min-height: 200px;
  background-image: url('/header.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImageHeader = () => {
  return (
    <ImageHeaderElement>
      <HeaderContainer transparent />
    </ImageHeaderElement>
  );
};

export default ImageHeader;
