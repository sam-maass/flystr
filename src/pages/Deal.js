import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeal, copyDeal } from '../actions/dealActions';
import DealView from '../components/DealView';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';
import NoDeal from '../components/NoDeal';

class DealsPage extends React.Component {
  componentDidMount() {
    this.props.copyDeal(this.props.tempDeal);
    this.props.fetchDeal(this.props.dealId);
    if (!this.props.previousRoute) {
      this.props.setAppbar({
        withDrawer: false,
        withReturn: false,
        button: {
          link: '/deals',
          text: 'All Deals',
          variant: 'raised',
          color: 'primary'
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentDeal.title !== prevProps.currentDeal.title) {
      this.props.setAppbar({
        title: `Flights to ${this.props.currentDeal.title}`
      });
    }
    if (
      this.props.currentDeal.noDealFound !==
        prevProps.currentDeal.noDealFound &&
      this.props.currentDeal.noDealFound
    )
      this.props.setAppbar({
        button: false,
        title: 'Deal expired',
        withDrawer: true
      });
  }

  render() {
    if (this.props.currentDeal.noDealFound) {
      return <NoDeal />;
    }
    if (this.props.currentDeal.destinations === undefined) return null;
    const title = `Flystr | Flights to ${this.props.currentDeal.title} from ${
      this.props.currentDeal.subtitle
    }`;
    const description = `Fly to amazing ${this.props.currentDeal.title} from ${
      this.props.currentDeal.subtitle
    } for only ${this.props.currentDeal.minPrice} EUR`;
    const twitterImage = `https://flystr.com/images/header/${
      this.props.currentDeal.destinations
    }.jpg`;

    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@flystr_com" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={twitterImage} />
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
  dealId: PropTypes.string,
  previousRoute: PropTypes.string
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    tempDeal: store.deals.find(deal => (deal._id = props.dealId)) || {},
    currentDeal: store.currentDeal,
    previousRoute: store.routing.previousRoute
  };
};

export default connect(
  mapStateToProps,
  { fetchDeal, copyDeal, setAppbar }
)(DealsPage);
