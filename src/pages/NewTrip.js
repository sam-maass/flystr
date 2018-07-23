import React from 'react';
import * as yup from 'yup';
import DestinationSelection from '../components/DestinationSelection';
import OriginSelection from '../components/OriginSelection';
import PreferenceSelection from '../components/PreferenceSelection';
import { withFormik } from 'formik';
import { api } from '../settings';

const NewTripPage = props => {
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
};

export default withFormik({
  handleSubmit: async (values, { props }) => {
    const [fromDuration, toDuration] = values.duration.split('-');
    if (!props.tripId) {
      await api().post(`/trips`, {
        fromDuration,
        toDuration,
        ...values
      });
    }
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
  mapPropsToValues: () => ({
    name: '',
    budget: '',
    page: 1,
    destinations: [],
    origins: [],
    startDate: '2018-07-22', //TODO: use dynamic dates
    endDate: '2018-12-22'
  })
})(NewTripPage);
