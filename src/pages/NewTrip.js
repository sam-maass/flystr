import React from 'react';
import DestinationSelection from '../components/DestinationSelection';
import DateSelection from '../components/DateSelection';
import OriginSelection from '../components/OriginSelection';
import { withFormik } from 'formik';

const NewTripPage = props => {
  switch (props.values.page) {
    case 1:
      return <DestinationSelection {...props} />;
    case 2:
      return <DateSelection {...props} />;
    case 3:
      return <OriginSelection {...props} />;
  }
};

export default withFormik({
  mapPropsToValues: () => ({
    page: 1,
    destinations: [],
    origins: [],
    startDate: '2018-07-22', //TODO: use dynamic dates
    endDate: '2018-12-22'
  })
})(NewTripPage);
