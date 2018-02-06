import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import AirportSuggest from '../AirportSuggest';
import ExpansionPanelSummary from 'material-ui/ExpansionPanel/ExpansionPanelSummary';
import ExpansionPanel from 'material-ui/ExpansionPanel/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography/Typography';
import ExpansionPanelDetails from 'material-ui/ExpansionPanel/ExpansionPanelDetails';

const FormikTextField = ({
  elemKey,
  type = 'text',
  label,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  placeholder,
  InputProps
}) => {
  return (
    <TextField
      name={elemKey}
      label={label}
      type={type}
      value={values[elemKey]}
      placeholder={placeholder}
      error={touched[elemKey] && Boolean(errors[elemKey])}
      helperText={touched[elemKey] && errors[elemKey]}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={InputProps}
    />
  );
};

FormikTextField.propTypes = {
  elemKey: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.object,
  defaultValue: PropTypes.any,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  InputProps: PropTypes.object
};

const NewTripForm = ({ classes, buttonText, ...props }) => {
  return (
    <Form className={classes.form}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Trip</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.dateContainer}>
            <FormikTextField
              elemKey="name"
              label="Name of the Trip"
              placeholder="Eurotrip / Weekend Getaway / Discover Africa"
              {...props}
            />
            <AirportSuggest
              elemKey="origins"
              label="From"
              placeholder="From where do yow wanna fly?"
              {...props}
            />
            <AirportSuggest
              elemKey="destinations"
              label="To"
              placeholder="Where do yow wanna fly?"
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Dates</Typography>
          {'\u00A0'}
          <Typography color="secondary">(optional)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.dateContainer}>
            <FormikTextField
              elemKey="startDate"
              label="Earliest Departure Date"
              type="date"
              {...props}
            />
            <FormikTextField
              elemKey="endDate"
              label="Latest Return Date"
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Button
        className={classes.button}
        raised
        color="primary"
        onClick={props.handleSubmit}
      >
        {buttonText}
      </Button>
    </Form>
  );
};

NewTripForm.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.string
};

const styles = {
  form: {
    margin: 8,
    display: 'grid'
  },
  button: {
    marginTop: 16
  },
  dateContainer: {
    display: 'grid',
    width: '100%',
    gridRowGap: '16px'
  }
};

export default withStyles(styles)(NewTripForm);
