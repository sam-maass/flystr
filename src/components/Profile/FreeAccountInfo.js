import React from 'react';
import { StripeDialog } from './StripeDialog';

export class FreeAccountInfo extends React.Component {
  state = { open: false };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <b>
          Flystr Free <br />
        </b>
        <a href="#" onClick={this.handleOpen}>
          Purchase premium
        </a>{' '}
        today to get more customizable trips
        <StripeDialog open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}
