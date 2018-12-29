//@ts-check

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeals } from '../../actions/dealActions';
import DealList from '../../components/DealList';
import { css } from 'emotion';
import { setAppbar } from '../../actions/appbarActions';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { getDealMetaData } from '../../utils/getDealMetaData';
import qs from 'qs';
import { Typography } from '../../components/Typography/Typography';
import LogoContainer from '../../components/LogoContainer';
import { Underlined } from '../../components/Typography/Underlined';

const style = css`
  margin: 16px;
  .teaser {
    display: grid;
    text-align: center;
    justify-items: center;
    margin: 16px;
    margin-bottom: 32px;
    grid-gap: 12px;
    .logo-container {
      margin: 8px;
    }
  }
`;

class DealsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      setTimeout(() => {
        this.props.setAppbar({
          button: { name: 'loginButton' }
        });
      }, 200);
    }
    this.fetchDeals();
  }

  fetchDeals = () => {
    const opts = {};
    if (this.props.region) opts.region = this.props.region;
    const qsParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    this.props.fetchDeals({ ...opts, ...qsParams });
  };

  componentDidUpdate(prevProps) {
    if (this.props.region !== prevProps.region) {
      this.fetchDeals();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.region !== nextProps.region) return true;
    if (this.props.deals !== nextProps.deals) return true;
    if (this.props.loggedIn !== nextProps.loggedIn) return true;
    return false;
  }

  render() {
    if (this.props.deals.length === 0) return null;
    const urlParams = this.props.location.search;
    const { activeDeal } = qs.parse(urlParams, { ignoreQueryPrefix: true });

    if (!this.props.deals[0]) return null;
    const {
      twitterTitle,
      twitterDescription,
      twitterImage,
      fbDescription
    } = getDealMetaData(this.props.deals[0]);

    let title = 'Cheap Flight Deals To Anywhere';
    let h1 = 'Cheap Trips Made Easy';
    let description =
      'Tripfixed makes cheap trips easy. Save up to 67% on flights and get notifications so you never miss a cheap flight again.';
    if (this.props.region) {
      title = `Flight Deals from ${this.props.region.replace('-', ' ')}`;
      h1 = `Cheap Flights from ${this.props.region.replace('-', ' ')}`;
      description = `Find the cheapest flights from ${this.props.region.replace(
        '-',
        ' '
      )}, track prices and get notifications when flights to your dream destination are on sale.`;
    }
    if (activeDeal) {
      title = `Flight Deals from ${this.props.deals[0].subtitle} to ${
        this.props.deals[0].title
      }`;
      h1 = `Cheap Flights Made Easy`;
      description = `Bargain flights from ${this.props.deals[0].subtitle} to ${
        this.props.deals[0].title
      }. Check available dates, track prices and get notifications for free.`;
    }

    return (
      <div className={style}>
        <Helmet>
          <title>{title} - Tripfixed</title>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@tripfixed" />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          <meta name="twitter:image" content={twitterImage} />
          <meta property="og:title" content={twitterTitle} />
          <meta property="og:description" content={fbDescription} />
          <meta property="og:image" content={twitterImage} />
        </Helmet>
        {!this.props.loggedIn && (
          <div className="teaser">
            <div className="logo-container">
              <LogoContainer variant="dark" height={60} />
            </div>
            <Underlined color="lightGray" variant="small">
              <h1>
                <Typography variant="h1">{h1}</Typography>
              </h1>
            </Underlined>
          </div>
        )}
        <DealList
          region={this.props.region}
          deals={this.props.deals}
          activeDeal={activeDeal}
          isLoggedIn={this.props.loggedIn}
        />
      </div>
    );
  }
}

DealsPage.propTypes = {
  fetchDeals: PropTypes.func,
  deals: PropTypes.array,
  loggedIn: PropTypes.bool,
  setAppbar: PropTypes.func,
  location: PropTypes.object,
  region: PropTypes.string
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
