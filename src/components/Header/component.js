import React, { Component } from 'react';
import { colors, padding } from '../../utils/styleVars';

import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.primary};
  padding: ${padding.base};
  color: #fafafa;
`;

console.log(styled);
class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div>Hello {this.props.name}</div>
      </Wrapper>
    );
  }
}

export default Header;
