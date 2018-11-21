import React from 'react';
import CloseIcon from '@material-ui/icons/CloseRounded';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { styles } from '../../styles';

const style = css`
  color: ${styles.colors.lightGray};
  padding: 8px;
  right: 0;
  position: absolute;
`;

export const DialogCloseIcon = ({ handleClose }) => {
  return (
    <div className={style} onClick={handleClose}>
      <CloseIcon color="inherit" />
    </div>
  );
};

DialogCloseIcon.propTypes = {
  handleClose: PropTypes.func
};
