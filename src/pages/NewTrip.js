import React from 'react';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import DestinationSelection from '../components/DestinationSelection';
import OriginSelection from '../components/OriginSelection';
import PreferenceSelection from '../components/PreferenceSelection';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { api } from '../settings';
import moment from 'moment';

class NewTripPage extends React.Component {
  render() {
    return getFormStep(this.props);
  }
}

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
    return <NewTripPage {...props} />;
  }
};

const FormikForm = withFormik({
  handleSubmit: async (values, { props, setStatus }) => {
    const [fromDuration, toDuration] = values.duration.split('-');
    if (!props.tripId) {
      await api().post(`/trips`, {
        fromDuration,
        toDuration,
        ...values
      });
    } else {
      if (values.shouldDelete) {
        await api().delete(`/trips/${props.tripId}`);
      } else {
        await api().post(`/trips/${props.tripId}`, {
          fromDuration,
          toDuration,
          ...values
        });
      }
    }
    setStatus('done');
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
  mapPropsToValues: ({ trips, tripId }) => {
    const trip = trips.find(trip => trip._id === tripId);
    return {
      deleteable: Boolean(trip),
      page: trip ? 3 : 1,
      destinations: (trip && trip.destinations) || [],
      origins: (trip && trip.origins) || [],
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment()
        .endOf('year')
        .format('YYYY-MM-DD'),
      budget: (trip && trip.budget) || '',
      name: (trip && trip.name) || '',
      duration: (trip && trip.duration) || ''
    };
  }
})(RoutingWrapper);

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    trips: store.trips
  };
};

const TripFormContainer = connect(
  mapStateToProps,
  { fetchUser }
)(FormikForm);
export default TripFormContainer;

function getFormStep(props) {
  switch (props.values.page) {
    case 1:
      return <OriginSelection {...props} />;
    case 2:
      return <DestinationSelection {...props} />;
    case 3:
      return <PreferenceSelection {...props} />;
    default:
      return <OriginSelection {...props} />;
  }
}
