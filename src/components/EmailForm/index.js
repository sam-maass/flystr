import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import * as yup from 'yup';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { signupWithEmail, loginWithEmail } from '../../actions/userActions';
import PropTypes from 'prop-types';

const buttonLabel = label =>
  label === 'login' ? 'Login with email' : 'Signup with email';

const InnerEmailForm = ({
  action,
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormControl fullWidth>
      <TextField
        margin="normal"
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        name="password"
        margin="normal"
        label="Password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button variant="contained" type="submit" disabled={isSubmitting}>
        {buttonLabel(action)}
      </Button>
    </FormControl>
  </form>
);

InnerEmailForm.propTypes = {
  action: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
};

const FormikEmailForm = withFormik({
  validateOnChange: false,
  validateOnBlur: false,
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .required()
  }),
  handleSubmit: async (values, { props, setSubmitting }) => {
    if (props.action === 'signup') props.signupWithEmail(values);
    if (props.action === 'login') props.loginWithEmail(values);
    setSubmitting(false);
  }
})(InnerEmailForm);

const mapStateToProps = (store, props) => {
  return {
    ...props
  };
};

const EmailForm = connect(
  mapStateToProps,
  { signupWithEmail, loginWithEmail }
)(FormikEmailForm);

export default EmailForm;
