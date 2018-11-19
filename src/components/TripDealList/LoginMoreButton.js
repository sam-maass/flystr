import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

export function LoginMoreButton({ flightsAfterButton }) {
  return (
    <Link to="/signup">
      <Button variant="outlined" color="primary" size="small">
        <span className="button-content extra-icon">
          <LockIcon>locked</LockIcon>
          <span>Log in to see {flightsAfterButton} other dates </span>
          <ExpandMoreIcon>more</ExpandMoreIcon>
        </span>{' '}
      </Button>
    </Link>
  );
}

LoginMoreButton.propTypes = {
  flightsAfterButton: PropTypes.number
};
