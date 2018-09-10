import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeal, copyDeal } from '../actions/dealActions';
import DealView from '../components/DealView';
import { setAppbar } from '../actions/appbarActions';

class DealsPage extends React.Component {
  componentDidMount() {
    this.props.copyDeal(this.props.tempDeal);
    this.props.fetchDeal(this.props.dealId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentDeal.title !== prevProps.currentDeal.title) {
      this.props.setAppbar({
        title: `Flights to ${this.props.currentDeal.title}`
      });
    }
  }

  render() {
    return <DealView deal={this.props.currentDeal} />;
  }
}

DealsPage.propTypes = {
  fetchDeal: PropTypes.func,
  copyDeal: PropTypes.func,
  currentDeal: PropTypes.object,
  setAppbar: PropTypes.func,
  tempDeal: PropTypes.object,
  dealId: PropTypes.string
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    tempDeal: store.deals.find(deal => (deal._id = props.dealId)) || {},
    currentDeal: store.currentDeal
  };
};

export default connect(
  mapStateToProps,
  { fetchDeal, copyDeal, setAppbar }
)(DealsPage);
