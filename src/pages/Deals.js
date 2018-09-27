import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/dealActions';
import DealList from '../components/DealList';
import { css } from 'emotion';
import { setAppbar } from '../actions/appbarActions';
import { Helmet } from 'react-helmet';

const style = css`
  margin: 16px;
`;

class DealsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      setTimeout(() => {
        this.props.setAppbar({
          button: { text: 'Login / Signup', link: `/login` }
        });
      }, 200);
    }
    this.props.fetchDeals();
  }

  render() {
    return (
      <div className={style}>
        <Helmet>
          <title>Flystr | Deals</title>
          <meta
            name="description"
            content="All cheap flight deals in one place. We crawl all major booking sites daily to provide you with the cheapest airline tickets"
          />
        </Helmet>
        <DealList deals={this.props.deals} />
      </div>
    );
  }
}

DealsPage.propTypes = {
  fetchDeals: PropTypes.func,
  deals: PropTypes.array,
  loggedIn: PropTypes.bool,
  setAppbar: PropTypes.func
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    loggedIn: Boolean(store.user._id),
    deals: store.deals
  };
};

export default connect(
  mapStateToProps,
  { fetchDeals, setAppbar }
)(DealsPage);
