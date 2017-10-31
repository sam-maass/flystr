import React, { Component } from 'react';
import Header from './component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, logoutUser } from '../../actions/userActions';

class HeaderContainerInner extends Component {
  onLoginSuccess = args => {
    window.localStorage.setItem('currentJWT', args.tokenObj.id_token);
    this.props.loginUser(args.tokenObj.id_token);
  };

  onLogout = () => {
    const jwt = window.localStorage.getItem('currentJWT');
    this.props.logoutUser(jwt);
  };

  onLoginFailure() {}
  render() {
    return (
      <Header
        {...this.props}
        onLoginSuccess={this.onLoginSuccess}
        onLogout={this.onLogout}
        onLoginFailure={this.onLoginFailure}
      />
    );
  }
}

HeaderContainerInner.propTypes = {
  loginUser: PropTypes.func,
  logoutUser: PropTypes.func
};

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(
  HeaderContainerInner
);
