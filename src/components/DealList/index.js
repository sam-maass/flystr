import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealList from './component';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';

class DealListContainer extends Component {
  render() {
    const { trips = [], tripId } = this.props;
    const trip = trips.find(trip => trip._id === tripId);
    console.log(trip);
    if (trip && trip.matchingDeals && trip.matchingDeals.length === 0) {
      return <EmptyState title="No Deals found" icon={<PindropIcon />} />;
    } else {
      return <DealList trips={trip.matchingDeals} />;
    }
  }
}

DealListContainer.propTypes = {
  getDeals: PropTypes.func,
  getAllDeals: PropTypes.func,
  deals: PropTypes.array,
  allUserDeals: PropTypes.bool
};

const mapStateToProps = (store, props) => {
  console.log(store.trips);
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

export default connect(mapStateToProps)(
  DealListContainer
);
