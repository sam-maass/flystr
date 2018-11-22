import { DialogCloseIcon } from './../DialogCloseIcon/index';
import { PlanSelection } from './PlanSelection';
import React from 'react';
import { Dialog, withMobileDialog } from '@material-ui/core';
import { StripeCheckout } from './StripeCheckout';
import PropTypes from 'prop-types';

export class ResponisveDialog extends React.Component {
  state = { selectedPlan: 'quarterly' };

  handlePlanChange = interval => () =>
    this.setState({ selectedPlan: interval });

  render() {
    return (
      <Dialog
        open={this.props.open}
        fullScreen={this.props.fullScreen}
        maxWidth="md"
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogCloseIcon handleClose={this.props.handleClose} />
        <PlanSelection
          handlePlanChange={this.handlePlanChange}
          selectedPlan={this.state.selectedPlan}
        />
        <StripeCheckout selectedPlan={this.state.selectedPlan} />
      </Dialog>
    );
  }
}

ResponisveDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  fullScreen: PropTypes.bool
};

export const StripeDialog = withMobileDialog()(ResponisveDialog);
