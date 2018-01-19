import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import AirportSuggest from '../AirportSuggest';

const FormikTextField = ({
  elemKey,
  type = 'text',
  label,
  defaultValue,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
}) => {
  return (
    <TextField
      name={elemKey}
      label={label}
      defaultValue={defaultValue}
      type={type}
      value={values[elemKey] || defaultValue}
      error={touched[elemKey] && !!errors[elemKey]}
      helperText={touched[elemKey] && errors[elemKey]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

FormikTextField.propTypes = {
  elemKey: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.object,
  defaultValue: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

const NewTripForm = props => {
  return (
    <Form className={props.classes.form}>
      <AirportSuggest elemKey="origins" label="From" placeholder="From where do yow wanna fly?" {...props}></AirportSuggest>
      <AirportSuggest elemKey="destinations" label="To" placeholder="Where do yow wanna fly?" {...props}></AirportSuggest>
      <FormikTextField
        elemKey="startDate"
        type="date"
        label="When"
        {...props}
      />
      <FormikTextField
        elemKey="endDate"
        type="date"
        label="Returning on"
        {...props}
      />
      <FormikTextField
        elemKey="budget"
        type="number"
        label="Max buget"
        {...props}
      />
      <Button raised color="primary" onClick={props.handleSubmit}>
        Send
      </Button>
    </Form>
  );
};

NewTripForm.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func
};

const styles = {
  form: {
    margin: 8,
    display: 'grid',
    gridRowGap: '16px'
  }
};

export default withStyles(styles)(NewTripForm);
