import React from 'react';
import { StripeDialog } from './StripeDialog';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export class FreeAccountInfo extends React.Component {
  state = { open: this.props.openPremiumDialog };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <b>
          TripFixed Free <br />
        </b>{' '}
        <br />
        <a href="#premium" onClick={this.handleOpen}>
          <Button variant="outlined" color="primary">
            Uprgrade to Premium
          </Button>
        </a>
        <br />
        <div style={{ margin: '4px 8px', lineHeight: 1.3 }}>
          <small>
            Premium gets you more customizable trips and immediate notifications
          </small>
        </div>
        <br />
        <StripeDialog open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}
FreeAccountInfo.propTypes = {
  openPremiumDialog: PropTypes.bool
};
