import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

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
  InputProps,
  fullWidth
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
      fullWidth={fullWidth}
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
  InputProps: PropTypes.object,
  fullWidth: PropTypes.bool
};

export default FormikTextField;
