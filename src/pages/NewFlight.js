import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlParser from '../components/UrlParser';

class NewFlightPage extends Component {
  componentDidMount() {
    // load data
    this.handleUrlParse = this.handleUrlParse.bind(this);
  }

  handleUrlParse(val) {
    console.log(val);
  }

  render() {
    return (
      <div>
        <UrlParser onParse={this.handleUrlParse} />
      </div>
    );
  }
}

NewFlightPage.propTypes = {
  placeholder: PropTypes.bool
};

export default NewFlightPage;
