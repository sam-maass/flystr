import React, { Component } from 'react';
import { colors, padding } from '../../utils/styleVars';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

const Wrapper = styled.section`
  background: ${colors.primary};
  padding: ${padding.base};
  color: #fafafa;
`;

class Header extends Component {
  render() {
    const { user, onLoginSuccess, onLoginFailure, logoutUser } = this.props;
    if (user && user._id)
      return (
        <Wrapper>
          <div>Hello {user.email}</div>
          <button onClick={logoutUser}>Logout</button>
        </Wrapper>
      );
    else
      return (
        <Wrapper>
          {' '}
          <GoogleLogin
            clientId="1059931024943-1u64m1fh6glpodhalllbkbul1hbsdbfh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
          />
        </Wrapper>
      );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  onLoginSuccess: PropTypes.func,
  onLoginFailure: PropTypes.func,
  logoutUser: PropTypes.func
};

export default Header;
