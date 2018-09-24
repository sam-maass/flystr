import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFlights, deleteFlight } from '../../actions/flightActions';
import FlightRow from '../FlightRow';
import { addFlightTemplates } from '../../actions/flightTemplateActions';

class FlightList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.selectFlight = this.selectFlight.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  componentDidMount() {
    this.props.fetchFlights();
    // load data
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
    }, 10);
  };

  updateFlight = flight => () => {
    this.props.addFlightTemplates([flight]);
  };

  render() {
    return (
      <Fragment>
        {this.props.flights.map(flight => {
          const isSelected = this.state.selected.includes(flight._id);
          const key = `flight-${flight._id}`;
          return (
            <FlightRow
              isSelected={isSelected}
              onSelect={this.selectFlight(flight._id)}
              onDelete={this.deleteFlight(flight._id)}
              onUpdate={this.updateFlight(flight)}
              key={key}
              flight={flight}
            />
          );
        })}
      </Fragment>
    );
  }
}

FlightList.propTypes = {
  flights: PropTypes.array,
  fetchFlights: PropTypes.func,
  deleteFlight: PropTypes.func,
  addFlightTemplates: PropTypes.func
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    flights: store.flights
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFlights,
    deleteFlight,
    addFlightTemplates
  }
)(FlightList);
