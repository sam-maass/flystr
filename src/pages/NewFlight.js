import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlParser from '../components/UrlParser';
import {
  addFlightTemplates,
  changeFlightTemplate
} from '../actions/flightTemplateActions';
import { connect } from 'react-redux';
import FlightTemplate from '../components/FlightTemplate';

class NewFlightPage extends Component {
  constructor(props) {
    super(props);
    this.handleUrlParse = this.handleUrlParse.bind(this);
  }

  componentDidMount() {
    // load data
  }

  handleUrlParse(flightTemplates) {
    this.props.addFlightTemplates(flightTemplates);
  }

  render() {
    return (
      <div>
        <UrlParser onParse={this.handleUrlParse} />
        {this.props.flightTemplates.map((flightTemplate, index) => (
          <FlightTemplate
            key={index}
            index={index}
            template={flightTemplate}
            handleChange={this.props.changeFlightTemplate}
          />
        ))}
      </div>
    );
  }
}

NewFlightPage.propTypes = {
  addFlightTemplates: PropTypes.func,
  changeFlightTemplate: PropTypes.func,
  flightTemplates: PropTypes.array
};
const mapStateToProps = (store, props) => {
  return {
    ...props,
    flightTemplates: store.flightTemplates
  };
};

export default connect(
  mapStateToProps,
  { addFlightTemplates, changeFlightTemplate }
)(NewFlightPage);
