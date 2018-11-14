import { Button, Dialog, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { StripeCheckout } from './StripeCheckout';

class InnerComponent extends React.Component {
  static propTypes = {
    activeAccountType: PropTypes.string
  };
  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  state = { open: false };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {' '}
        <div>{this.props.activeAccountType}</div>
        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
          Signup for premium
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Signup for premium</DialogTitle>
          <StripeCheckout />
        </Dialog>
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
