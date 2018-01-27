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
      error={touched[elemKey] && !!errors[elemKey]}
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

const NewTripForm = ({ classes, ...props }) => {
  return (
    <Form className={classes.form}>
      <FormikTextField
        elemKey="name"
        label="Name of the Trip"
        placeholder="Eurotrip / Weekend Getaway / Discover Africa"
        {...props}
      />
      <AirportSuggest elemKey="origins" label="From" placeholder="From where do yow wanna fly?" {...props}></AirportSuggest>
      <AirportSuggest elemKey="destinations" label="To" placeholder="Where do yow wanna fly?" {...props}></AirportSuggest>
      <FormikTextField
        elemKey="budget"
        type="number"
        label="Max buget"
        placeholder="What is the max price you're willing to pay?"
        {...props}
        InputProps={{
          endAdornment: '€ '
        }}
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
