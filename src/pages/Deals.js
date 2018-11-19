//@ts-check

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/dealActions';
import DealList from '../components/DealList';
import { css } from 'emotion';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { getDealMetaData } from './getDealMetaData';
import qs from 'qs';

const style = css`
  margin: 16px;
`;

class DealsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      setTimeout(() => {
        this.props.setAppbar({
          button: { text: 'Login / Signup', link: `/signup` }
        });
      }, 200);
    }
    this.props.fetchDeals({ search: this.props.location.search });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.deals !== nextProps.deals) return true;
    if (this.props.loggedIn !== nextProps.loggedIn) return true;
    return false;
  }

  render() {
    if (this.props.deals.length === 0) return null;
    const urlParams = this.props.location.search;
    const { activeDeal } = qs.parse(urlParams, { ignoreQueryPrefix: true });

    if (!this.props.deals[0]) return null;
    const { twitterTitle, twitterDescription, twitterImage } = getDealMetaData(
      this.props.deals[0]
    );
    return (
      <div className={style}>
        <Helmet>
          <title>Flystr | Deals</title>
          <meta
            name="description"
            content="All cheap flight deals in one place. We crawl all major booking sites daily to provide you with the cheapest airline tickets"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@flystr_com" />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          <meta name="twitter:image" content={twitterImage} />
        </Helmet>
        <DealList deals={this.props.deals} activeDeal={activeDeal} />
      </div>
    );
  }
}

DealsPage.propTypes = {
  fetchDeals: PropTypes.func,
  deals: PropTypes.array,
  loggedIn: PropTypes.bool,
  setAppbar: PropTypes.func,
  location: PropTypes.object
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    loggedIn: Boolean(store.user._id),
    deals: store.deals
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchDeals, setAppbar }
  )(DealsPage)
);
