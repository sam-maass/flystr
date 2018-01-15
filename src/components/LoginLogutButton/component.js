import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import GoogleLogin /*GoogleLogout*/ from 'react-google-login';

export const LoginLogoutButtonComponent = ({
  loggedIn,
  onLoginFailure,
  onLoginSuccess
  // onLogout
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
        <Button raised color="primary">
          Login with Google
        </Button>
      </GoogleLogin>
    );
  } else {
    return null;
  }
};

LoginLogoutButtonComponent.propTypes = {
  onLoginFailure: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
