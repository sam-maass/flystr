import React from 'react';
import PropTypes from 'prop-types';

const TripList = ({ trips = [] }) => {
  return (
    <ul>
      {trips.map((item, key) => (
        <li key={key}>
          {item.destination} - {item.date}
        </li>
      ))}
    </ul>
  );
};

TripList.propTypes = { trips: PropTypes.array };

export default TripList;
