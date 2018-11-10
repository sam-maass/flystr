import React from 'react';
import PropTypes from 'prop-types';
import InnerTripList from './component';
import { connect } from 'react-redux';
import EmptyTripList from '../EmptyTripList';
import { fetchUser } from '../../actions/userActions';

class TripListContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.trips !== nextProps.trips) return true;
    if (
      (this.props.notifcations[0] || {})._id !==
      (nextProps.notifcations[0] || {})._id
    ) {
      this.props.fetchUser();
    }
    return false;
  }

  render() {
    if (this.props.trips.length === 0) {
      return <EmptyTripList />;
    } else {
      return <InnerTripList trips={this.props.trips} />;
    }
  }
}

TripListContainer.propTypes = {
  trips: PropTypes.array,
  notifcations: PropTypes.array,
  fetchUser: PropTypes.func
};

const mapStateToProps = store => {
  return {
    trips: store.trips,
    notifcations: store.notifications
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(TripListContainer);
