import React, { Component } from 'react';
import Header from './component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderContainerInner extends Component {
  render() {
    return <Header user={this.props.user} />;
  }
}

HeaderContainerInner.propTypes = {
  user: PropTypes.obj
};

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const HeaderContainer = connect(mapStateToProps)(HeaderContainerInner);
export default HeaderContainer;
