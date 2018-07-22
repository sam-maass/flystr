import React from 'react';
import AirportSuggest from '../AirportSuggest';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const style = css`
  max-width: 1024px;
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 8px;
  margin: auto;
  height: 100%;
  ${classes.typography.base};
  h2 {
    ${classes.typography.base};
  }
  .secondary {
    color: ${styles.colors.lightGray};
  }
  .button {
    align-self: flex-end;
    bottom: 8px;
  }
`;

const OriginSelection = props => {
  const hasSelection = props.values.destinations.length > 0;
  const label = hasSelection
    ? 'Add more depature airports'
    : 'Select a departure airport';
  return (
    <div className={style}>
      <div>
        <h2>From where can you start your trip?</h2>
        <AirportSuggest elemKey="origins" label={label} {...props} />
        <p className="secondary">
          If you select multiple depature airports you&apos;ll have a higher
          chance of getting a good deal
        </p>
      </div>
      <div className="button">
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => props.setFieldValue('page', 2)}
        >
          Set Search Preference
        </Button>
      </div>
    </div>
  );
};

OriginSelection.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired
};
export default OriginSelection;
