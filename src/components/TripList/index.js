import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TripList from './component';
import { getUserTrips } from '../../actions/tripActions';
import { connect } from 'react-redux';

class TripListContainer extends Component {
  componentDidMount() {
    this.props.getUserTrips();
  }
  render() {
    return <TripList trips={this.props.trips} />;
  }
}

TripListContainer.propTypes = {
  getUserTrips: PropTypes.func,
  trips: PropTypes.array
};

const mapStateToProps = store => {
  return {
    user: store.user,
    newTrip: store.newTrip,
    trips: store.trips
  };
};

export default connect(mapStateToProps, { getUserTrips })(TripListContainer);
