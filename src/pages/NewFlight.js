import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlParser from '../components/UrlParser';
import { connect } from 'react-redux';
import FlightTemplateContainer from '../components/FlightTemplateContainer';
import { addFlightTemplates } from '../actions/flightTemplateActions';
import FlightList from '../components/FlightList';

class NewFlightPage extends Component {
  constructor(props) {
    super(props);
    this.handleUrlParse = this.handleUrlParse.bind(this);
  }

  handleUrlParse(flightTemplates) {
    this.props.addFlightTemplates(flightTemplates);
  }

  render() {
    return (
      <div>
        <UrlParser onParse={this.handleUrlParse} />
        <FlightTemplateContainer />
        <FlightList />
      </div>
    );
  }
}

NewFlightPage.propTypes = {
  addFlightTemplates: PropTypes.func
};

export default connect(
  () => {
    return {};
  },
  {
    addFlightTemplates
  }
)(NewFlightPage);
