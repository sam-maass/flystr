import React from 'react';
import { Dialog, withMobileDialog } from '@material-ui/core';
import { Typography } from '../Typography/Typography';
import EmailForm from '../EmailForm';
import { css } from 'emotion';
import { GoogleButton } from '../GoogleButton';
import { DialogCloseIcon } from '../DialogCloseIcon';

const style = css`
  margin: 16px;
  min-width: 300px;
`;

function InnerAuthModal({ fullScreen, open = true }) {
  return (
    <div className="auth-modal">
      <Dialog open={open} fullScreen={fullScreen} maxWidth="md">
        <DialogCloseIcon />
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

export const AuthModal = withMobileDialog()(InnerAuthModal);
