import React from 'react';
import PropTypes from 'prop-types';
import TripList from './component';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';

const TripListContainer = ({ trips }) => {
  if (trips.length === 0) {
    return (
      <EmptyState title="Add your first destination" icon={<PindropIcon />} />
    );
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
