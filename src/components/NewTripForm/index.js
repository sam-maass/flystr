import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewTripForm from './component';
import { submitNewTrip, changeNewTrip } from '../../actions/tripActions';

class NewTripFormContainer extends Component {
  submitNewTrip = e => {
    e.preventDefault();
    this.props.submitNewTrip(this.props.newTrip);
  };

  onInputChange = e => {
    this.props.changeNewTrip({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.props.newTrip.submitted)
      return (
        <Redirect
          to={{
            pathname: '/home'
          }}
        />
      );
    else {
      return (
        <NewTripForm
          {...this.props}
          submitNewTrip={this.submitNewTrip}
          onInputChange={this.onInputChange}
        />
      );
    }
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

export default connect(mapStateToProps, { submitNewTrip, changeNewTrip })(
  NewTripFormContainer
);
