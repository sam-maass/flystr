import { GoogleButtonComponent } from './component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, logoutUser, signupUser } from '../../actions/userActions';

import React, { Component } from 'react';

class GoogleButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = !!props.user._id;
  }

  onLoginSuccess = args => {
    const { loginUser, signupUser, action } = this.props;
    window.localStorage.setItem('currentJWT', args.tokenObj.id_token);
    if (action === 'login') loginUser(args.tokenObj.id_token);
    if (action === 'signup') signupUser(args.tokenObj.id_token);
  };

  onLoginFailure = () => {
    alert('Login failed');
  };
  render() {
    return (
      <GoogleButtonComponent
        onLoginSuccess={this.onLoginSuccess}
        text={this.props.text}
        onLoginFailure={this.onLoginFailure}
        loggedIn={this.loggedIn}
      />
    );
  }
}

GoogleButtonContainer.propTypes = {
  loginUser: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  text: PropTypes.string,
  action: PropTypes.string
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user
  };
};

export const GoogleButton = connect(mapStateToProps, {
  loginUser,
  logoutUser,
  signupUser
})(GoogleButtonContainer);
