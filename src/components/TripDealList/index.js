import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TripDealList from './component';
import { getDeals, getAllDeals } from '../../actions/dealActions';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';

class TripDealListContainer extends Component {
  componentDidMount() {
    this.props.getAllDeals();
  }
  render() {
    if (this.props.trips.length === 0) {
      return <EmptyState title="No Deals found" icon={<PindropIcon />} />;
    } else {
      return <TripDealList trips={this.props.trips} />;
    }
  }
}

TripDealListContainer.propTypes = {
  getDeals: PropTypes.func,
  getAllDeals: PropTypes.func,
  trips: PropTypes.array,
  allUserDeals: PropTypes.bool
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

export default connect(mapStateToProps, { getDeals, getAllDeals })(
  TripDealListContainer
);
