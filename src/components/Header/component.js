import React from 'react';
import { Link } from 'react-router-dom';
import { color, padding } from '../../style-components/vars';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

const Wrapper = styled.section`
  background: ${props =>
    props.transparent ? color.darkgrayTransparent : color.darkgray};
  padding: ${padding.base};
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: inline-block;
  img {
    display: block;
    height: 24px;
  }
`;

const buttonStyle = {
  display: 'inline-block',
  background: 'transparent',
  color: '#fff',
  width: 'auto',
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 2,
  border: '1px solid transparent',
  fontSize: 16,
  fontFamily: 'Raleway'
};

const Header = ({
  user,
  onLoginSuccess,
  onLoginFailure,
  onLogout,
  transparent
}) => {
  if (user && user._id)
    return (
      <Wrapper transparent={transparent}>
        <LogoWrapper>
          <Link to="/">
            <img src="./logo.png" alt="Flystr Logo" />
          </Link>
        </LogoWrapper>
        <button onClick={onLogout}>Logout</button>
      </Wrapper>
    );
  else
    return (
      <Wrapper transparent={transparent}>
        <LogoWrapper>
          <Link to="/">
            <img src="./logo.png" alt="Flystr Logo" />
          </Link>
        </LogoWrapper>
        <GoogleLogin
          clientId="1059931024943-1u64m1fh6glpodhalllbkbul1hbsdbfh.apps.googleusercontent.com"
          buttonText="Login"
          style={buttonStyle}
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
        />
      </Wrapper>
    );
};

Header.propTypes = {
  user: PropTypes.object,
  onLoginSuccess: PropTypes.func,
  onLoginFailure: PropTypes.func,
  onLogout: PropTypes.func,
  transparent: PropTypes.bool
};

export default Header;
