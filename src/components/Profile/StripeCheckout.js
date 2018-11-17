import React from 'react';
import PropTypes from 'prop-types';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import { STRIPE_PUBLIC_KEY } from '../../settings';

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
          <InjectedCheckoutForm selectedPlan={this.props.selectedPlan} />
        </Elements>
      </StripeProvider>
    );
  }
}

StripeCheckout.propTypes = {
  selectedPlan: PropTypes.string
};

function getStripeInstance() {
  return window.Stripe && window.Stripe(STRIPE_PUBLIC_KEY);
}
