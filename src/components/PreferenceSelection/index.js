import React from 'react';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import Button from '@material-ui/core/Button';
import FormikTextField from '../FormikTextField';
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
  .form {
    display: grid;
  }
  .secondary {
    color: ${styles.colors.lightGray};
  }
  .button {
    align-self: flex-end;
    bottom: 8px;
  }
`;

const PreferenceSelection = props => {
  return (
    <div className={style}>
      <div className="form">
        <h2>Almost done. What kind of flight are you looking for?</h2>
        <FormikTextField
          elemKey="startDate"
          label="Earliest Possible Departure"
          type="date"
          {...props}
        />
        <FormikTextField
          elemKey="endDate"
          label="Latest Possible Return"
          type="date"
          {...props}
        />
        <FormikTextField
          elemKey="duration"
          label="Duration (in days)"
          placeholder="eg. 14 or 14-21"
          type="text"
          {...props}
        />
        <FormikTextField
          elemKey="name"
          label="Name of the Trip"
          placeholder="Eurotrip / Weekend Getaway / Discover Africa"
          {...props}
        />
        <FormikTextField
          elemKey="budget"
          type="number"
          label="Max budget"
          placeholder="What is the max price you're willing to pay?"
          {...props}
          InputProps={{
            endAdornment: '€ '
          }}
        />
      </div>
      <div className="button">
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => props.handleSubmit()}
        >
          Create new trip
        </Button>
      </div>
    </div>
  );
};

PreferenceSelection.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default PreferenceSelection;
