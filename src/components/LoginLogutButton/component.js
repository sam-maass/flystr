import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

export const LoginLogoutButtonComponent = ({
  loggedIn,
  onLoginFailure,
  onLoginSuccess,
  onLogout
}) => {
  if (!loggedIn) {
    return (
      <GoogleLogin
        clientId="1059931024943-1u64m1fh6glpodhalllbkbul1hbsdbfh.apps.googleusercontent.com"
        style={{}}
        tag="div"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
      >
        <Button color="contrast">Login</Button>
      </GoogleLogin>
    );
  } else {
    return (
      <GoogleLogout style={{}} tag="div" onLogoutSuccess={onLogout}>
        <Button color="contrast">Logout</Button>
      </GoogleLogout>
    );
  }
};

LoginLogoutButtonComponent.propTypes = {
  onLoginFailure: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
