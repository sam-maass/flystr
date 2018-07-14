import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import { api } from '../../settings';
import moment from 'moment';
import { fetchUser } from '../../actions/userActions';
import PropTypes from 'prop-types';

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
  validationSchema: yup.object().shape({
    destinations: yup.array().min(1),
    origins: yup.array().min(1),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    price: yup.number().required()
  }),
  handleSubmit: async (values, { setStatus }) => {
    await api().post(`/deal`, {
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

RoutingWrapper.propTypes = {
  status: PropTypes.string,
  fetchUser: PropTypes.func
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const DealFormContainer = connect(
  mapStateToProps,
  { fetchUser }
)(FormikForm);
export default DealFormContainer;
