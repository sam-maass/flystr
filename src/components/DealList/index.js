import React from 'react';
import PropTypes from 'prop-types';
import DealList from './component';
import { connect } from 'react-redux';
import TripView from './TripView';


const DealListContainer = ({ trips = [], tripId }) => {
  const trip = trips.find(trip => trip._id === tripId);
  if (trip && trip.matchingDeals && trip.matchingDeals.length === 0) {
    return <TripView trip={trip}></TripView>;
  } else {
    return (<TripView trip={trip}>
      <DealList trips={trip.matchingDeals} />;
    </TripView>);
  }
};

DealListContainer.propTypes = {
  trips: PropTypes.array,
  tripId: PropTypes.string,
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

export default connect(mapStateToProps)(
  DealListContainer
);
