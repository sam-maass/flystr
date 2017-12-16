import React, { Component } from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewTripForm from './component';
import Yup from 'yup';

import { submitNewTrip, changeNewTrip } from '../../actions/tripActions';

class NewTripFormContainer extends Component {
  submitNewTrip = values => {
    console.log(values);
    this.props.submitNewTrip(values);
  };

  render() {
    return <FormikForm {...this.props} submitNewTrip={this.submitNewTrip} />;
  }
}

NewTripFormContainer.propTypes = {
  submitNewTrip: PropTypes.func,
  changeNewTrip: PropTypes.func,
  newTrip: PropTypes.any
};

const mapStateToProps = store => {
  return {
    user: store.user,
    newTrip: store.newTrip
  };
};

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      destinations: '',
      origins: '',
      startDate: '',
      endDate: '',
      budget: ''
    };
  },
  validationSchema: Yup.object().shape({
    destinations: Yup.string()
      .min(3)
      .required(),
    origins: Yup.string()
      .min(3)
      .required(),
    startDate: Yup.string(),
    endDate: Yup.string(),
    budget: Yup.number().positive()
  }),
  handleSubmit: (values, { props }) => {
    props.submitNewTrip(values);
  }
})(NewTripForm);

export default connect(mapStateToProps, { submitNewTrip, changeNewTrip })(
  NewTripFormContainer
);
