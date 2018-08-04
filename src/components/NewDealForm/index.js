import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import { Redirect } from 'react-router-dom';
import { api } from '../../settings';
import { fetchUser } from '../../actions/userActions';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const formikSettings = {
  handleSubmit: async (values, { setStatus }) => {
    await api().post(`/deal`, {
      ...values
    });
    setStatus('done');
  },
  mapPropsToValues: () => {}
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
