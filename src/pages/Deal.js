//@ts-check

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeal } from '../actions/dealActions';
import DealView from '../components/DealView';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';
import NoDeal from '../components/NoDeal';
import { getDealMetaData } from './getDealMetaData';
import { Card, Button } from '@material-ui/core';
import moment from 'moment';

class DealPage extends React.Component {
  componentDidMount() {
    this.props.fetchDeal(this.props.dealId);
    if (!this.props.loggedIn) {
      this.props.setAppbar({
        button: { name: 'loginButton' }
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

    const bufferLink = this.getBufferLink();

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
        {this.props.isAdmin && (
          <Card>
            <a href={bufferLink} target="_blank" rel="noopener noreferrer">
              <Button>Share with Buffer</Button>
            </a>
          </Card>
        )}
        <DealView deal={this.props.currentDeal} />
      </Fragment>
    );
  }

  getBufferLink() {
    const bufferUrl = `https://flystr.com/deal/${this.props.currentDeal.slug}`;
    const {
      title,
      subtitle,
      minPrice,
      currency,
      firstDeparture,
      lastReturn
    } = this.props.currentDeal;
    const bufferTimeframe = `${moment(firstDeparture).format('MMM')} - ${moment(
      lastReturn
    ).format('MMM')}`;
    const bufferDescription = `
      ✈️ #${subtitle} to ${title}
      💸 from ${minPrice} ${currency} return 
      🗓 available ${bufferTimeframe}
      `;
    const bufferLink = `https://buffer.com/add?text=${encodeURIComponent(
      bufferDescription
    )}&url=${bufferUrl}`;
    return bufferLink;
  }
}

DealPage.propTypes = {
  fetchDeal: PropTypes.func,
  currentDeal: PropTypes.object,
  setAppbar: PropTypes.func,
  tempDeal: PropTypes.object,
  dealId: PropTypes.string,
  isAdmin: PropTypes.bool,
  loggedIn: PropTypes.bool
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    isAdmin: store.user.isAdmin,
    loggedIn: Boolean(store.user._id),
    tempDeal: store.deals.find(deal => (deal._id = props.dealId)) || {},
    currentDeal: store.currentDeal
  };
};

export default connect(
  mapStateToProps,
  { fetchDeal, setAppbar }
)(DealPage);
