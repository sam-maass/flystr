import React from 'react';
import TripDealList from '../../components/TripDealList';
import PropTypes from 'prop-types';

const TripPage = ({ tripId }) => {
  return (
    <div>
      <TripDealList tripId={tripId} />
    </div>
  );
};

TripPage.propTypes = {
  classes: PropTypes.object,
  tripId: PropTypes.string
};

export default TripPage;
