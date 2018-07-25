import React from 'react';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import Button from '@material-ui/core/Button';
import FormikTextField from '../FormikTextField';
import PropTypes from 'prop-types';
import AirportChips from '../AirportChips';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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
    display: grid;
    grid-gap: 8px;
  }
  .header {
    text-align: center;
  }
`;

const PreferenceSelection = props => {
  const deleteTrip = () => {
    props.setFieldValue('shouldDelete', true);
    props.handleSubmit();
  };
  return (
    <div className={style}>
      <div className="header">
        <AirportChips airports={props.values.origins} /> to
        <AirportChips airports={props.values.destinations} />
        <IconButton onClick={() => props.setFieldValue('page', 1)}>
          <EditIcon />
        </IconButton>
      </div>
      <div className="form">
        <h2>Almost done. What kind of flight are you looking for?</h2>
        <FormikTextField
          elemKey="name"
          label="Name of the Trip"
          placeholder="Eurotrip / Weekend Getaway / Discover Africa"
          {...props}
        />
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
      {!props.values.deleteable && (
        <div className="button">
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => props.handleSubmit()}
          >
            Find flights
          </Button>
        </div>
      )}
      {props.values.deleteable && (
        <div className="button">
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => props.handleSubmit()}
          >
            Update
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="default"
            onClick={() => deleteTrip()}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

PreferenceSelection.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default PreferenceSelection;
