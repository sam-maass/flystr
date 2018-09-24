import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addFlightTemplates,
  changeFlightTemplate,
  removeFlightTemplate
} from '../../actions/flightTemplateActions';
import { fetchFlights, addFlight } from '../../actions/flightActions';
import FlightTemplate from '../FlightTemplate';

class FlightTemplatesContainer extends Component {
  addFlight = (flight, templateIndex) => {
    this.props.addFlight(flight);
    this.props.removeFlightTemplate(templateIndex);
    setTimeout(() => {
      this.props.fetchFlights();
    }, 200);
  };

  render() {
    return (
      <Fragment>
        {this.props.flightTemplates.map((flightTemplate, index) => (
          <FlightTemplate
            key={index}
            index={index}
            template={flightTemplate}
            handleChange={this.props.changeFlightTemplate}
            onAddFlight={this.addFlight}
          />
        ))}
      </Fragment>
    );
  }
}

FlightTemplatesContainer.propTypes = {
  addFlightTemplates: PropTypes.func,
  changeFlightTemplate: PropTypes.func,
  removeFlightTemplate: PropTypes.func,
  addFlight: PropTypes.func,
  fetchFlights: PropTypes.func,
  flightTemplates: PropTypes.array
};

const mapStateToProps = store => {
  return {
    flightTemplates: store.flightTemplates
  };
};

export default connect(
  mapStateToProps,
  {
    addFlightTemplates,
    changeFlightTemplate,
    removeFlightTemplate,
    fetchFlights,
    addFlight
  }
)(FlightTemplatesContainer);
