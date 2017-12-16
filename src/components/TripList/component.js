import React from 'react';
import PropTypes from 'prop-types';
import TripRow from '../TripRow';

const TripList = ({ trips = [] }) => {
  return <div>{trips.map((item, key) => <TripRow key={key} {...item} />)}</div>;
};

TripList.propTypes = { trips: PropTypes.array };

export default TripList;
