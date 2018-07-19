import React from 'react';
import PropTypes from 'prop-types';
import TripList from './component';
import { connect } from 'react-redux';
import EmptyTripList from '../EmptyTripList';

const TripListContainer = ({ trips }) => {
  if (trips.length === 0) {
    return <EmptyTripList />;
  } else {
    return <TripList trips={trips} />;
  }
};

TripListContainer.propTypes = {
  trips: PropTypes.array
};

const mapStateToProps = store => {
  return {
    user: store.user,
    trips: store.trips
  };
};

export default connect(mapStateToProps)(TripListContainer);
