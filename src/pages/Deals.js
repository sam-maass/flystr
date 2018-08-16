import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/dealActions';
import DealList from '../components/DealList';
import { css } from 'emotion';
import { setAppbar } from '../actions/appbarActions';

const style = css`
  margin: 8px;
`;

class DealsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.setAppbar({
        withDrawer: false,
        button: { text: 'Login / Signup', link: `/login` }
      });
    }
    this.props.fetchDeals();
  }

  render() {
    return (
      <div className={style}>
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
