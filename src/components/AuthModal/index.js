import React from 'react';
import { Dialog } from '@material-ui/core';
import { Typography } from '../Typography/Typography';
import EmailForm from '../EmailForm';
import { css } from 'emotion';
import { GoogleButton } from '../GoogleButton';
import { DialogCloseIcon } from '../DialogCloseIcon';
import { connect } from 'react-redux';
import { closeGlobalModal } from '../../actions/modalActions';
import PropTypes from 'prop-types';

const style = css`
  margin: 16px;
  min-width: 230px;
  @media screen and (min-width: 500px) {
    min-width: 300px;
  }
`;

function InnerAuthModal({ modalContent, closeGlobalModal }) {
  const open = Boolean(modalContent);
  return (
    <div className="auth-modal">
      <Dialog open={open} onClose={closeGlobalModal}>
        <DialogCloseIcon handleClose={closeGlobalModal} />
        <div className={style}>
          <Typography variant="title"> Login </Typography>
          <EmailForm action="login" />
          <br />
          <GoogleButton action="login" text="Login with Google" />
        </div>
      </Dialog>
    </div>
  );
}

InnerAuthModal.propTypes = {
  modalContent: PropTypes.string,
  closeGlobalModal: PropTypes.func
};

const mapStateToProps = store => {
  return {
    modalContent: store.modal.content
  };
};

export const AuthModal = connect(
  mapStateToProps,
  { closeGlobalModal }
)(InnerAuthModal);
