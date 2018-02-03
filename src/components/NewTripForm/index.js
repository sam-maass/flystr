import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { api } from '../../settings';
import moment from 'moment';
import { fetchUser } from '../../actions/userActions';


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
      budget: '',
      name: ''
    };
  },
  validationSchema: Yup.object().shape({
    destinations: Yup.string()
      .min(3)
      .required(),
    origins: Yup.string()
      .min(3)
      .required(),
    budget: Yup.number().required(),
    name: Yup.string().required()
  }),
  handleSubmit: async (values, { setStatus }) => {
    await api.post(`/trips`, {
      ...values
    });
    setStatus('done');
  }
};

const RoutingWrapper = props => {
  const isSubmitted = props.status === 'done';
  if (isSubmitted) {
    props.fetchUser();
    return (
      <Redirect
        to={{
          pathname: '/trips'
        }}
      />
    );
  } else {
    return <NewTripForm {...props} />;
  }
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const TripFormContainer = connect(mapStateToProps, { fetchUser })(FormikForm);
export default TripFormContainer;
