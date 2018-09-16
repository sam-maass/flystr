import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import NewDealForm from './component';
import { Redirect } from 'react-router-dom';
import { api } from '../../settings';
import { fetchUser } from '../../actions/userActions';
import PropTypes from 'prop-types';
import { fetchDeal } from '../../actions/dealActions';

const mapStateToProps = (store, props) => {
  return {
    ...props,
    currentDeal: store.currentDeal,
    user: store.user
  };
};

const formikSettings = {
  mapPropsToValues: () => {},
  handleSubmit: async (values, { props, setStatus }) => {
    if (props.dealId) {
      //update
      await api().post(`/deal/${props.dealId}`, {
        ...values
      });
    } else {
      //insert
      await api().post(`/deal`, {
        ...values
      });
    }
    setStatus('done');
  }
};

class RoutingWrapper extends React.Component {
  componentDidMount() {
    if (this.props.dealId) {
      this.props.fetchDeal(this.props.dealId);
    }
  }
  render() {
    const isSubmitted = this.props.status === 'done';
    if (isSubmitted) {
      this.props.fetchUser();
      return (
        <Redirect
          to={{
            pathname: '/deals'
          }}
        />
      );
    } else {
      return <NewDealForm {...this.props} />;
    }
  }
}

RoutingWrapper.propTypes = {
  status: PropTypes.string,
  dealId: PropTypes.string,
  fetchUser: PropTypes.func,
  fetchDeal: PropTypes.func
};

const FormikForm = withFormik(formikSettings)(RoutingWrapper);
const DealFormContainer = connect(
  mapStateToProps,
  { fetchUser, fetchDeal }
)(FormikForm);
export default DealFormContainer;
