import { LoginLogoutButtonComponent } from './component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, logoutUser } from '../../actions/userActions';

import React, { Component } from 'react';

class LoginLogoutButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = !!props.user._id;
  }

  onLoginSuccess = args => {
    const { loginUser } = this.props;
    window.localStorage.setItem('currentJWT', args.tokenObj.id_token);
    loginUser(args.tokenObj.id_token);
  };

  onLogout = () => {
    const { logoutUser } = this.props;
    const jwt = window.localStorage.getItem('currentJWT');
    logoutUser(jwt);
  };

  onLoginFailure = () => {
    alert('Login failed');
  };
  render() {
    return (
      <LoginLogoutButtonComponent
        onLoginSuccess={this.onLoginSuccess}
        onLogout={this.onLogout}
        onLoginFailure={this.onLoginFailure}
        loggedIn={this.loggedIn}
      />
    );
  }
}

LoginLogoutButtonContainer.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const LoginLogoutButton = connect(mapStateToProps, {
  loginUser,
  logoutUser
})(LoginLogoutButtonContainer);
