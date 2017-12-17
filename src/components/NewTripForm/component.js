import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const FormikTextField = ({
  elemKey,
  type = 'text',
  label,
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
      type={type}
      value={values[elemKey]}
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
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

const NewTripForm = props => {
  return (
    <Form style={{ display: 'grid' }}>
      <FormikTextField
        elemKey="origins"
        label="Where do you fly form?"
        {...props}
      />
      <FormikTextField
        elemKey="startDate"
        label="When do you want to fly?"
        {...props}
      />
      <FormikTextField
        elemKey="endDate"
        label="When do you want to return?"
        {...props}
      />
      <FormikTextField
        elemKey="destinations"
        label="Where do you want to fly to?"
        {...props}
      />
      <FormikTextField
        elemKey="budget"
        type="number"
        label="What is your max buget?"
        {...props}
      />
      <Button raised color="primary" onClick={props.handleSubmit}>
        Send
      </Button>
    </Form>
  );
};

NewTripForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func
};

export default NewTripForm;
