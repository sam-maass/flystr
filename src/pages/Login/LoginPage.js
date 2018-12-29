import React from 'react';
import { connect } from 'react-redux';
import { openGlobalModal } from '../../actions/modalActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

let openedBefore = false;

const LoginPage = ({ openGlobalModal, isLoggedIn, previousRoute }) => {
  if (!isLoggedIn) {
    if (!openedBefore) {
      openGlobalModal('signup');
      openedBefore = true;
    }
    return <div />;
  }
  if (isLoggedIn && !previousRoute) {
    return <Redirect to="/trips" />;
  }
  if (isLoggedIn && previousRoute) {
    return <Redirect to={previousRoute} />;
  }
};

LoginPage.propTypes = {
  openGlobalModal: PropTypes.func
};

const mapStateToProps = store => {
  return {
    isLoggedIn: Boolean(store.user._id),
    isModalOpen: Boolean(store.modal.content),
    previousRoute: store.routing.previousRoute
  };
};
export default connect(
  mapStateToProps,
  { openGlobalModal }
)(LoginPage);
