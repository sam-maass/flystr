import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import GoogleLogin /*GoogleLogout*/ from 'react-google-login';

export const GoogleButtonComponent = ({
  loggedIn,
  onLoginFailure,
  onLoginSuccess,
  text
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
          {text}
        </Button>
      </GoogleLogin>
    );
  } else {
    return null;
  }
};

GoogleButtonComponent.propTypes = {
  onLoginFailure: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
