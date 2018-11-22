import React from 'react';
import { Dialog, Button, withMobileDialog } from '@material-ui/core';
import { Typography } from '../Typography/Typography';
import EmailForm from '../EmailForm';
import { css } from 'emotion';
import { GoogleButton } from '../GoogleButton';
import { DialogCloseIcon } from '../DialogCloseIcon';
import { connect } from 'react-redux';
import { closeGlobalModal } from '../../actions/modalActions';
import PropTypes from 'prop-types';
import { InnerSignupPage } from '../../pages/InnerSignupPage';
import { isBrowser } from '../../settings';
import { ModalLink } from '../ModalLink';

const style = css`
  margin: 16px;
  min-width: 230px;
  @media screen and (min-width: 500px) {
    min-width: 300px;
  }
  .signup {
    display: grid;
    margin-top: 32px;
    grid-template-columns: max-content 1fr;
    align-items: center;
    justify-items: flex-start;
  }
  .google-login {
    margin: 16px 0 0 0;
  }
`;

class InnerAuthModal extends React.Component {
  state = {
    shouldSuggestLogin:
      isBrowser() && window.localStorage.getItem('hasFlystrAccount')
  };

  constructor(props) {
    super(props);
  }

  render() {
    const open = Boolean(this.props.modalContent);
    const showSignup =
      this.props.modalContent === 'signup' && !this.state.shouldSuggestLogin;
    const showLogin =
      this.props.modalContent === 'login' || this.state.shouldSuggestLogin;

    const removeSuggestion = () => {
      this.setState({ shouldSuggestLogin: false });
    };

    return (
      <div className="auth-modal">
        <Dialog
          open={open}
          onClose={this.props.closeGlobalModal}
          fullScreen={this.props.fullScreen}
        >
          <DialogCloseIcon handleClose={this.props.closeGlobalModal} />
          <div className={style}>
            {showLogin && (
              <>
                <Typography variant="title"> Login </Typography>
                <EmailForm action="login" />
                <div className="google-login">
                  <GoogleButton action="login" text="Login with Google" />
                </div>
                <div className="signup">
                  <Typography secondary>New to flystr?</Typography>
                  <ModalLink modal="signup">
                    <Button color="primary" onClick={removeSuggestion}>
                      Sign up
                    </Button>
                  </ModalLink>
                </div>
              </>
            )}
            {showSignup && <InnerSignupPage />}
          </div>
        </Dialog>
      </div>
    );
  }
}

InnerAuthModal.propTypes = {
  modalContent: PropTypes.string,
  closeGlobalModal: PropTypes.func,
  fullScreen: PropTypes.bool
};

const mapStateToProps = store => {
  return {
    modalContent: store.modal.content
  };
};

export const AuthModal = connect(
  mapStateToProps,
  { closeGlobalModal }
)(withMobileDialog()(InnerAuthModal));
