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

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

const formikSettings = {
  mapPropsToValues: ({ trips, tripId }) => {
    const trip = trips.find(trip => trip._id === tripId);
    return {
      destinations: (trip && trip.destinations) || '',
      origins: (trip && trip.origins) || '',
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment()
        .add(4, 'weeks')
        .format('YYYY-MM-DD'),
      budget: (trip && trip.budget) || '',
      name: (trip && trip.name) || '',
      duration: (trip && trip.duration) || ''
    };
  },
  validationSchema: yup.object().shape({
    destinations: yup.array().min(1),
    origins: yup.array().min(1),
    budget: yup.number().required(),
    name: yup.string().required(),
    startDate: yup.date(),
    duration: yup.string().matches(/(^\d+$|^\d+-\d+$)/, {
      excludeEmptyString: true,
      message: 'must be in format "7" or "7-10"'
    })
  }),
  handleSubmit: async (values, { props, setStatus }) => {
    const [fromDuration, toDuration] = values.duration.split('-');
    if (!props.tripId) {
      await api.post(`/trips`, {
        fromDuration,
        toDuration,
        ...values
      });
    } else {
      await api.post(`/trips/${props.tripId}`, {
        fromDuration,
        toDuration,
        ...values
      });
    }
    setStatus('done');
  }
};

const RoutingWrapper = props => {
  const isSubmitted = props.status === 'done';
  const buttonText = props.tripId ? 'Edit Trip' : 'Add Trip';
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
    return <NewTripForm buttonText={buttonText} {...props} />;
  }
};

RoutingWrapper.propTypes = {
  status: PropTypes.string,
  fetchUser: PropTypes.func,
  tripId: PropTypes.string
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const TripFormContainer = connect(
  mapStateToProps,
  { fetchUser }
)(FormikForm);
export default TripFormContainer;
