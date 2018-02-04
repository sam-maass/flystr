import React from 'react';
import PropTypes from 'prop-types';
import DealList from './component';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';

const DealListContainer = ({ trips = [], tripId }) => {
  const trip = trips.find(trip => trip._id === tripId);
  if (trip && trip.matchingDeals && trip.matchingDeals.length === 0) {
    return <EmptyState title="No Deals found" icon={<PindropIcon />} />;
  } else {
    return <DealList trips={trip.matchingDeals} />;
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
