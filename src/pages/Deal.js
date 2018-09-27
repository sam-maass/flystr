import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeal, copyDeal } from '../actions/dealActions';
import DealView from '../components/DealView';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';
import NoDeal from '../components/NoDeal';
import { getDealMetaData } from './getDealMetaData';

class DealsPage extends React.Component {
  componentDidMount() {
    this.props.copyDeal(this.props.tempDeal);
    this.props.fetchDeal(this.props.dealId);
    if (!this.props.previousRoute) {
      this.props.setAppbar({
        withReturn: false,
        button: {
          link: '/deals',
          text: 'All Deals'
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
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
    const { noDealFound, destinations } = this.props.currentDeal;
    if (noDealFound) {
      return <NoDeal />;
    }
    if (destinations === undefined) return null;
    const {
      metaTitle,
      metaDescription,
      twitterTitle,
      twitterDescription,
      twitterImage
    } = getDealMetaData(this.props.currentDeal);

    return (
      <Fragment>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@flystr_com" />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
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
