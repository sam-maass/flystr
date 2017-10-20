import React, { Component } from 'react';
import { colors, padding } from '../../utils/styleVars';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.primary};
  padding: ${padding.base};
  color: #fafafa;
`;

class Header extends Component {
  render() {
    const { user } = this.props;
    if (user && user._id)
      return (
        <Wrapper>
          <div>Hello {user.email}</div>
        </Wrapper>
      );
    else return <Wrapper>Login</Wrapper>;
  }
}

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
