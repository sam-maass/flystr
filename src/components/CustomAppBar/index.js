import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAppbar } from '../../actions/appbarActions';
import InnerAppBar from './InnerAppBar';

function ButtonAppBar(props) {
  const { setAppbar, title, withDrawer = true, withReturn, button } = props;

  setAppbar({ title, withDrawer, withReturn, button });

  return <InnerAppBar />;
}

ButtonAppBar.propTypes = {
  setAppbar: PropTypes.func,
  button: PropTypes.object,
  title: PropTypes.string,
  withDrawer: PropTypes.bool,
  withReturn: PropTypes.bool
};

const mapStateToProps = (store, props) => {
  return {
    ...props
  };
};

export const CustomAppBar = connect(
  mapStateToProps,
  { setAppbar }
)(ButtonAppBar);
