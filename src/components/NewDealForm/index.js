import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { api } from '../../settings';
import moment from 'moment';

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
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment()
        .add(4, 'weeks')
        .format('YYYY-MM-DD'),
      price: '',
      link: ''
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
    price: Yup.number().required()
  }),
  handleSubmit: async (values, { setStatus }) => {
    await api.post(`/deal`, {
      ...values
    });
    setStatus('done');
  }
};

const RoutingWrapper = props => {
  const isSubmitted = props.status === 'done';
  if (isSubmitted) {
    return (
      <Redirect
        to={{
          pathname: '/destinations'
        }}
      />
    );
  } else {
    return <NewTripForm {...props} />;
  }
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const DealFormContainer = connect(mapStateToProps)(FormikForm);
export default DealFormContainer;
