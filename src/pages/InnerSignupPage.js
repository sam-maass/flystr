import React from 'react';
import { GoogleButton } from '../components/GoogleButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import EmailForm from '../components/EmailForm';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { isBrowser } from '../settings';
import { Typography } from '../components/Typography/Typography';
import { openGlobalModal } from '../actions/modalActions';
import { connect } from 'react-redux';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const style = css`
  display: grid;
  grid-gap: 16px;
  .open-login {
    display: grid;
    margin-top: 32px;
    grid-template-columns: max-content 1fr;
    align-items: center;
    justify-items: flex-start;
  }
`;

class InnerSignupPage2 extends React.Component {
  state = {
    tocAccepted: false,
    suggestLogin: isBrowser() && window.localStorage.getItem('hasFlystrAccount')
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  openLogin = () => this.props.openGlobalModal('login');
  render() {
    const { tocAccepted } = this.state;

    return (
      <div className={style}>
        <Typography variant="title"> Signup</Typography>
        <EmailForm action="signup" tocAccepted={tocAccepted} />
        <GoogleButton
          action="signup"
          text="Signup with Google"
          tocAccepted={tocAccepted}
        />
        <p>
          <FormControlLabel
            control={
              <Checkbox
                checked={tocAccepted}
                onChange={this.handleChange('tocAccepted')}
                value="tocAccepted"
              />
            }
            label={
              <Typography>
                <p>
                  I have read and agree to the{' '}
                  <Link to="/terms">Terms and Conditions</Link> and{' '}
                  <Link to="/legal">Privacy Policy</Link> of Flystr
                </p>
              </Typography>
            }
          />
        </p>
        <div className="open-login">
          <Typography secondary>Already have an account?</Typography>
          <Button color="primary" onClick={this.openLogin}>
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

InnerSignupPage2.propTypes = {
  openGlobalModal: PropTypes.func
};

export const InnerSignupPage = connect(
  null,
  { openGlobalModal }
)(InnerSignupPage2);
