// CheckoutForm.js
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';
import { css } from 'emotion';
import { classes } from '../../styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

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
`;

class CheckoutForm extends React.Component {
  static propTypes = {
    stripe: PropTypes.object,
    selectedPlan: PropTypes.string,
    error: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    complete: false
  };

  handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    console.log(this.props.selectedPlan);

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({}).then(({ token }) => {
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
          <div className="button-container">
            <Button
              // disabled={!this.state.complete}
              variant="outlined"
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

export default injectStripe(CheckoutForm);
