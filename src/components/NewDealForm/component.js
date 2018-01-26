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
  defaultValue: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

const NewDealForm = ({ classes, ...props }) => {
  return (
    <Form className={classes.form}>
      <AirportSuggest elemKey="origins" label="From" placeholder="From where does the flight leave?" {...props}></AirportSuggest>
      <AirportSuggest elemKey="destinations" label="To" placeholder="Where does the flight go?" {...props}></AirportSuggest>
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
      <FormikTextField elemKey="price" type="number" label="Price" {...props} />
      <FormikTextField elemKey="link" label="Link" {...props} />
      <Button raised color="primary" onClick={props.handleSubmit}>
        Add deal
      </Button>
    </Form>
  );
};

NewDealForm.propTypes = {
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

export default withStyles(styles)(NewDealForm);
