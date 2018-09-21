import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlParser from '../components/UrlParser';
import {
  addFlightTemplates,
  changeFlightTemplate
} from '../actions/flightTemplateActions';
import { connect } from 'react-redux';
import FlightTemplate from '../components/FlightTemplate';
import { fetchFlights, deleteFlight } from '../actions/flightActions';
import FlightRow from '../components/FlightRow';

class NewFlightPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleUrlParse = this.handleUrlParse.bind(this);
    this.selectFlight = this.selectFlight.bind(this);
  }

  componentDidMount() {
    this.props.fetchFlights();
    // load data
  }

  handleUrlParse(flightTemplates) {
    this.props.addFlightTemplates(flightTemplates);
  }

  selectFlight = id => () => {
    const selected = this.state.selected;
    if (selected.includes(id)) {
      const index = selected.indexOf(id);
      selected.splice(index, 1);
    } else {
      selected.push(id);
    }
    this.setState({ selected });
  };

  deleteFlight = id => () => {
    this.props.deleteFlight(id);
    setTimeout(() => {
      this.props.fetchFlights();
    }, 100);
  };

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
        {this.props.flights.map((flight, index) => (
          <FlightRow
            isSelected={this.state.selected.includes(flight._id)}
            onSelect={this.selectFlight(flight._id)}
            onDelete={this.deleteFlight(flight._id)}
            key={`flight-${index}`}
            flight={flight}
            index={index}
          />
        ))}
      </div>
    );
  }
}

NewFlightPage.propTypes = {
  addFlightTemplates: PropTypes.func,
  fetchFlights: PropTypes.func,
  deleteFlight: PropTypes.func,
  changeFlightTemplate: PropTypes.func,
  flightTemplates: PropTypes.array,
  flights: PropTypes.array
};
const mapStateToProps = (store, props) => {
  return {
    ...props,
    flightTemplates: store.flightTemplates,
    flights: store.flights
  };
};

export default connect(
  mapStateToProps,
  {
    addFlightTemplates,
    changeFlightTemplate,
    fetchFlights,
    deleteFlight
  }
)(NewFlightPage);
