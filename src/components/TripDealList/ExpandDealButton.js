import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export function ExpandDealButton({
  isExpanded,
  flightsAfterButton,
  handleExpandToggle
}) {
  return (
    <Button
      onClick={handleExpandToggle}
      variant="outlined"
      color="primary"
      size="small"
    >
      {!isExpanded && (
        <span className="button-content">
          Show {flightsAfterButton} more <ExpandMoreIcon>more</ExpandMoreIcon>
        </span>
      )}
      {isExpanded && (
        <span className="button-content">
          Show less <ExpandLessIcon>less</ExpandLessIcon>
        </span>
      )}
    </Button>
  );
}

ExpandDealButton.propTypes = {
  isExpanded: PropTypes.bool,
  flightsAfterButton: PropTypes.number,
  handleExpandToggle: PropTypes.func
};
