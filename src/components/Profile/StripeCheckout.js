import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

export class StripeCheckout extends React.Component {
  state = {
    stripe: getStripeInstance()
  };

  loadStripe() {
    if (!window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      script.id = 'stripe-js';
      document.head.appendChild(script);
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: getStripeInstance() });
      });
    }
  }

  constructor(props) {
    super(props);
    this.loadStripe();
  }

  render() {
    if (!this.state.stripe) return null;
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements locale="en">
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

function getStripeInstance() {
  return window.Stripe && window.Stripe('pk_test_xGpp4JhwiX7rpcffTTjiRkYU');
}
