import React from 'react';
import DealList from '../components/DealList';
import PropTypes from 'prop-types';

const TripPage = ({ tripId }) => {
  return (
    <div>
      <DealList tripId={tripId} />
    </div>
  );
};

TripPage.propTypes = {
  classes: PropTypes.object,
  tripId: PropTypes.string
};

export default TripPage;
