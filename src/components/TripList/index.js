import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TripList from './component';
import { getUserTrips } from '../../actions/tripActions';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';

class TripListContainer extends Component {
  componentDidMount() {
    this.props.getUserTrips();
  }
  render() {
    if (this.props.trips.length === 0) {
      return (
        <EmptyState title="Add your first destination" icon={<PindropIcon />} />
      );
    } else {
      return <TripList trips={this.props.trips} />;
    }
  }
}

TripListContainer.propTypes = {
  getUserTrips: PropTypes.func,
  trips: PropTypes.array
};

const mapStateToProps = store => {
  return {
    user: store.user,
    trips: store.trips
  };
};

export default connect(mapStateToProps, { getUserTrips })(TripListContainer);
