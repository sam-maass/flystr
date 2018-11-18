import React from 'react';
import PropTypes from 'prop-types';
import InnerTripList from './component';
import { connect } from 'react-redux';
import EmptyTripList from '../EmptyTripList';
import { fetchUser } from '../../actions/userActions';

const FREE_USER_TRIP_LIMIT = 2;

class TripListContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.trips !== nextProps.trips) return true;
    if (
      (this.props.notifications[0] || {})._id !==
      (nextProps.notifications[0] || {})._id
    ) {
      this.props.fetchUser();
    }
    return false;
  }

  render() {
    if (this.props.trips.length === 0) {
      return <EmptyTripList />;
    } else {
      return (
        <InnerTripList
          trips={this.props.trips}
          showPremiumButton={this.userTripLimitReached()}
        />
      );
    }
  }

  userTripLimitReached() {
    const isFreeUser =
      this.props.stripeSubscription === {} ||
      this.props.stripeSubscription === undefined;
    const tripLimitReached = this.props.trips.length >= FREE_USER_TRIP_LIMIT;
    return isFreeUser && tripLimitReached;
  }
}

TripListContainer.propTypes = {
  stripeSubscription: PropTypes.object,
  trips: PropTypes.array,
  notifications: PropTypes.array,
  fetchUser: PropTypes.func
};

const mapStateToProps = store => {
  return {
    stripeSubscription: store.user.stripeSubscription,
    trips: store.trips,
    notifications: store.notifications
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(TripListContainer);
