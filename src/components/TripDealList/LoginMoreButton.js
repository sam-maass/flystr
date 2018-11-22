import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockIcon from '@material-ui/icons/LockOutlined';
import { ModalLink } from '../ModalLink';

export function LoginMoreButton({ flightsAfterButton }) {
  return (
    <ModalLink modal="signup">
      <Button variant="outlined" color="primary" size="small">
        <span className="button-content extra-icon">
          <LockIcon>locked</LockIcon>
          <span>Log in to see {flightsAfterButton} other dates </span>
          <ExpandMoreIcon>more</ExpandMoreIcon>
        </span>{' '}
      </Button>
    </ModalLink>
  );
}

LoginMoreButton.propTypes = {
  flightsAfterButton: PropTypes.number
};
