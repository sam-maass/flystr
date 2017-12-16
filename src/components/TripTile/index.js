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

const TripTile = ({
  destinations = [],
  duration,
  startDate,
  maxPrice,
  status
}) => {
  return (
    <StyledTripTile>
      <div>Trip to:{destinations.join(',')}</div>
      <div>Start: {startDate}</div>
      <div>Duration: {duration} days</div>
      <div>Max: {maxPrice} €</div>
      <StatusBar status={status}>2 Deals found</StatusBar>
    </StyledTripTile>
  );
};

export default TripTile;
