import { StripeDialog } from './StripeDialog';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class InnerComponent extends React.Component {
  static propTypes = {
    activeAccountType: PropTypes.string
  };
  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  state = { open: true };

  render() {
    return (
      <>
        {' '}
        <div>{this.props.activeAccountType}</div>
        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
          Signup for premium
        </Button>
        <StripeDialog open={this.state.open} handleClose={this.handleClose} />
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    activeAccountType: store.user.accountType
  };
};

export const AccountTypeSetting = connect(mapStateToProps)(InnerComponent);
