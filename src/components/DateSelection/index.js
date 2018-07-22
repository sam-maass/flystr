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
const DateSelection = props => {
  return (
    <div className={style}>
      <div className="form">
        <h2>What dates would work for you?</h2>

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
      </div>
      <div className="button">
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => props.setFieldValue('page', 3)}
        >
          Set Preferences
        </Button>
      </div>
    </div>
  );
};

DateSelection.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired
};

export default DateSelection;
