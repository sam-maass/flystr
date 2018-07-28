import React from 'react';
import { css } from 'emotion';
import moment from 'moment';
import { classes } from '../../styles';
import PropTypes from 'prop-types';

const style = css`
  ${classes.typography.base};
  display: grid;
  grid-gap: 2px;
  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    div {
      padding: 8px;
      background-color: #fafafa;
    }
    &.header {
      font-weight: bold;
    }
  }
`;

const TripTable = ({ trips }) => {
  return (
    <div className={style}>
      <div className="row header">
        <div>From</div>
        <div>To</div>
        <div>Active Deals</div>
        <div>Created at</div>
      </div>
      {trips.map(trip => (
        <div key={trip._id} className="row">
          <div>{trip.origins.join(', ')}</div>
          <div>{trip.destinations.join(',')}</div>
          <div>{trip.matchingDeals.length}</div>
          <div>{moment(trip.createdAt).format('DD.MM.YY hh:mm')}</div>
        </div>
      ))}
    </div>
  );
};

TripTable.propTypes = {
  trips: PropTypes.array
};

export default TripTable;
