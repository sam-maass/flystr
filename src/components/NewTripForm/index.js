import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewTripForm from './component';
import Yup from 'yup';
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
      budget: '',
      name: '',
      duration: ''
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
    name: Yup.string().required(),
    startDate: Yup.date(),
    duration: Yup.string().matches(/(^\d+$|^\d+-\d+$)/, { excludeEmptyString: true, message: 'must be in format "7" or "7-10"' })

  }),
  handleSubmit: async (values, { setStatus }) => {

    const [fromDuration, toDuration] = values.duration.split('-');
    await api.post(`/trips`, {
      fromDuration,
      toDuration,
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
const TripFormContainer = connect(mapStateToProps, { fetchUser })(FormikForm);
export default TripFormContainer;
