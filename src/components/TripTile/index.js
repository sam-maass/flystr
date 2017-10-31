import React from 'react';
import styled from 'styled-components';

const StyledTripTile = styled.div`
  width: 200px;
  height: 200px;
  margin: 12px;
  text-align: center;
  background: palegreen;
  position: relative;
`;

const StatusBar = styled.div`
  background: green;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  color: #fafafa;
`;

const TripTile = ({ name, duration, season, priceLimit, status }) => {
  return (
    <StyledTripTile>
      <div>{name}</div>
      <div>{duration}</div>
      <div>{season}</div>
      <div>{priceLimit}</div>
      <StatusBar status={status}>2 Deals found</StatusBar>
    </StyledTripTile>
  );
};

export default TripTile;
