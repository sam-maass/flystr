import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress
} from '@material-ui/core';
import { css } from 'emotion';

const style = css`
  text-align: center;
  padding: 16px;
`;

export function PurchaseProcessingDialog({}) {
  return (
    <Dialog open={true}>
      <DialogTitle>Processing your payment</DialogTitle>
      <DialogContent>
        <div className={style}>
          <CircularProgress color="primary" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
