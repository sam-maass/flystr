import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addFlightTemplates,
  changeFlightTemplate,
  removeFlightTemplate
} from '../../actions/flightTemplateActions';
import {
  fetchFlights,
  addFlight,
  deleteFlight
} from '../../actions/flightActions';
import FlightTemplate from '../FlightTemplate';

class FlightTemplatesContainer extends Component {
  addFlight = (flight, templateIndex) => () => {
    this.props.addFlight(flight);
    this.props.removeFlightTemplate(templateIndex);
    setTimeout(() => {
      this.props.fetchFlights();
    }, 200);
  };

  removeFlight = (flight, templateIndex) => () => {
    this.props.deleteFlight(flight._id);
    this.props.removeFlightTemplate(templateIndex);
    setTimeout(() => {
      this.props.fetchFlights();
    }, 200);
  };

  removeFlightTemplate = templateIndex => () => {
    this.props.removeFlightTemplate(templateIndex);
  };

  render() {
    return (
      <Fragment>
        {this.props.flightTemplates.map((flightTemplate, index) => {
          const { outDate, inDate, outDestination, outOrigin } = flightTemplate;
          const key = `${outDate}-${outOrigin}-${outDestination}-${inDate}`;
          return (
            <FlightTemplate
              key={key}
              index={index}
              template={flightTemplate}
              handleChange={this.props.changeFlightTemplate}
              onAddFlight={this.addFlight(flightTemplate, index)}
              onRemoveFlightPermanently={this.removeFlight(
                flightTemplate,
                index
              )}
              onRemoveFlight={this.removeFlightTemplate(flightTemplate)}
            />
          );
        })}
      </Fragment>
    );
  }
}

FlightTemplatesContainer.propTypes = {
  addFlightTemplates: PropTypes.func,
  changeFlightTemplate: PropTypes.func,
  removeFlightTemplate: PropTypes.func,
  addFlight: PropTypes.func,
  deleteFlight: PropTypes.func,
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
    addFlight,
    deleteFlight
  }
)(FlightTemplatesContainer);
