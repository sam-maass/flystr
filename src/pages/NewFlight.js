import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewFlightPage extends Component {
  componentDidMount() {
    // load data
  }

  render() {
    return <div>New Flight Page</div>;
  }
}

NewFlightPage.propTypes = {
  placeholder: PropTypes.bool
};

export default NewFlightPage;
