import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/dealActions';
import DealList from '../components/DealList';

class DealsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDeals();
  }

  render() {
    return <DealList deals={this.props.deals} />;
  }
}

DealsPage.propTypes = {
  fetchDeals: PropTypes.func,
  deals: PropTypes.array
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    deals: store.deals
  };
};

export default connect(
  mapStateToProps,
  { fetchDeals }
)(DealsPage);
