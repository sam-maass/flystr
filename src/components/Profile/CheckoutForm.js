// CheckoutForm.js
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { CardNumberElement, CardElement } from 'react-stripe-elements';
import { css } from 'emotion';
import { classes } from '../../styles';
import {
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

const style = css`
  ${classes.typography.base};
  width: 500px;
`;

class CheckoutForm extends React.Component {
  static propTypes = {
    stripe: PropTypes.object,
    error: {}
  };

  state = {
    complete: false
  };
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', owner: {
    //   name: 'Jenny Rosen'
    // }});
  };
  handleChange = opts => this.setState(opts);

  render() {
    console.log(this.props.stripe);
    return (
      <div className={style}>
        <form onSubmit={this.handleSubmit}>
          <DialogContent>
            <CardElement
              onReady={() => console.log('ready')}
              onChange={this.handleChange}
              style={{ base: { fontSize: '18px' } }}
            />
            {(this.state.error || {}).message}
          </DialogContent>
          <DialogActions>
            <Button
              disabled={!this.state.complete}
              onClick={this.handleSubmit}
              color="primary"
              autoFocus
            >
              Buy Premium
            </Button>
          </DialogActions>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
