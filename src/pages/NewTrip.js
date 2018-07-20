import React from 'react';
import DestinationSelection from '../components/DestinationSelection';
import { withFormik } from 'formik';

const NewTripPage = props => {
  switch (props.values.page) {
    case 1:
      return <DestinationSelection {...props} />;
    case 2:
      return <div>Test</div>;
  }
};

export default withFormik({
  mapPropsToValues: () => ({ page: 1, destinations: [] })
})(NewTripPage);
