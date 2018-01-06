import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const formikSettings = {
  mapPropsToValues: () => {
    return {
      destinations: '',
      origins: '',
      startDate: '',
      endDate: '',
      budget: ''
    };
  },
  validationSchema: Yup.object().shape({
    destinations: Yup.string()
      .min(3)
      .required(),
    origins: Yup.string()
      .min(3)
      .required(),
    startDate: Yup.string().required(),
    endDate: Yup.string().required(),
    budget: Yup.number()
      .positive()
      .required()
  }),
  handleSubmit: async (values, { setStatus }) => {
    const res = await axios.post('https://api.flystr.com/trip', {
      ...values
    });
    console.log(res);
    setStatus('done');
  }
};

const RoutingWrapper = props => {
  const isSubmitted = props.status === 'done';
  if (isSubmitted) {
    return (
      <Redirect
        to={{
          pathname: '/home'
        }}
      />
    );
  } else {
    return <NewTripForm {...props} />;
  }
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const TripFormContainer = connect(mapStateToProps)(FormikForm);
export default TripFormContainer;
