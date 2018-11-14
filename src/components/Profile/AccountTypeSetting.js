import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Placeholder
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
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
