import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealList from './component';
import { getDeals, getAllDeals } from '../../actions/dealActions';
import { connect } from 'react-redux';
import EmptyState from '../EmptyState';
import PindropIcon from 'material-ui-icons/PinDrop';
import qs from 'qs';

class TripListContainer extends Component {
  componentDidMount() {
    this.props.getDeals(
      qs.parse(window.location.search, { ignoreQueryPrefix: true })
    );
  }
  render() {
    if (this.props.deals.length === 0) {
      return <EmptyState title="No Deals found" icon={<PindropIcon />} />;
    } else {
      return <DealList trips={this.props.deals} />;
    }
  }
}

TripListContainer.propTypes = {
  getDeals: PropTypes.func,
  getAllDeals: PropTypes.func,
  deals: PropTypes.array,
  allUserDeals: PropTypes.bool
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    deals: store.deals
  };
};

export default connect(mapStateToProps, { getDeals, getAllDeals })(
  TripListContainer
);
