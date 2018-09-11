import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeal, copyDeal } from '../actions/dealActions';
import DealView from '../components/DealView';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';

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
    const title = `Flystr | Flights to ${this.props.currentDeal.title} from ${
      this.props.currentDeal.subtitle
    }`;
    const description = `Fly to amazing ${this.props.currentDeal.title} from ${
      this.props.currentDeal.subtitle
    } for only ${this.props.currentDeal.minPrice} EUR`;
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <DealView deal={this.props.currentDeal} />;
      </Fragment>
    );
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
