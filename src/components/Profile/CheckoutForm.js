// CheckoutForm.js
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { purchaseSubscription } from '../../actions/userActions';

const style = css`
  ${classes.typography.base};
  width: 100%;
  margin: 0 auto;
  padding: 0px 24px;
  fieldset {
    background-color: #7795f8;
  }
  @media only screen and (min-width: 840px) {
    width: 800px;
  }
  .button-container {
    padding: 16px 0px;
  }
  .error-container {
    line-height: 2;
    padding: 0 8px;
    color: red;
  }
  .card-element-container {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    background: #fafafa;
  }
  .stripe-info {
    padding-top: 4px;
  }
  small {
    line-height: 1.25;
    letter-spacing: 0;
    color: ${styles.colors.lightGray};
  }
`;

class CheckoutForm extends React.Component {
  static propTypes = {
    stripe: PropTypes.object,
    selectedPlan: PropTypes.string,
    error: PropTypes,
    purchaseSubscription: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    requestInProgress: false,
    complete: false
  };

  async handleSubmit(ev) {
    this.setState({
      requestInProgress: true
    });
    const { stripe, selectedPlan } = this.props;

    ev.preventDefault();

    const token = await stripe.createToken({});
    if (token.error) {
      this.setState({ requestInProgress: false });
    } else {
      this.props.purchaseSubscription({ ...token, selectedPlan });
    }
  }
  handleChange = opts => this.setState(opts);

  render() {
    return (
      <div className={style}>
        <form onSubmit={this.handleSubmit}>
          <div className="card-element-container">
            <CardElement
              onChange={this.handleChange}
              style={{
                base: {
                  fontSize: '18px'
                }
              }}
            />
          </div>
          <div className="error-container">
            {(this.state.error || {}).message}
          </div>
          <div className="stripe-info">
            <small>
              Your payment is securely encrypted and processed via our partner{' '}
              <a href="https://www.stripe.com">Stripe</a>. Flystr has at no
              point in time full access to your credit card data.
            </small>
          </div>
          <div className="button-container">
            <Button
              // disabled={!this.state.complete}
              variant="outlined"
              disabled={this.state.requestInProgress}
              fullWidth
              onClick={this.handleSubmit}
              color="primary"
              autoFocus
            >
              Buy Premium
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { purchaseSubscription }
)(injectStripe(CheckoutForm));
