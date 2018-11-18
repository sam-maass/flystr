import React from 'react';
import { StripeDialog } from './StripeDialog';
import PropTypes from 'prop-types';

export class FreeAccountInfo extends React.Component {
  state = { open: this.props.openPremiumDialog };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <b>
          Flystr Free <br />
        </b>
        <a href="#premium" onClick={this.handleOpen}>
          Purchase premium
        </a>{' '}
        today to get more customizable trips
        <StripeDialog open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}
FreeAccountInfo.propTypes = {
  openPremiumDialog: PropTypes.bool
};
