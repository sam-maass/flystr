import React from 'react';
import { StyledTripRow } from './style';
import moment from 'moment';

const TripRow = ({
  status,
  startDate,
  duration,
  maxPrice,
  destinations = []
}) => {
  const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
  return (
    <StyledTripRow>
      <div className="bg">
        <div className="status">{status}</div>
      </div>
      <div className="content">
        <div className="title">{destinations.join(',')}</div>
        <div className="info">
          {' '}
          <div>{formattedStartDate}</div>
          <div>{duration} days</div>
          <div>{maxPrice} €</div>
        </div>
      </div>
    </StyledTripRow>
  );
};

TripRow.propTypes = {};

export default TripRow;
