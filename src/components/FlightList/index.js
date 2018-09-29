import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFlights, deleteFlight } from '../../actions/flightActions';
import FlightRow from '../FlightRow';
import { addFlightTemplates } from '../../actions/flightTemplateActions';
import DealPartialForm from './DealPartialForm';
import { Button } from '@material-ui/core';
import moment from 'moment';
import { css } from 'emotion';

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.selectFlight = this.selectFlight.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
    this.handleDealPost = this.handleDealPost.bind(this);
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

  handleDealPost = () => {
    this.setState({ selected: [] });
    this.props.fetchFlights();
  };

  updateOutdatedFlights = () => {
    const outdatedFlights = this.props.flights.filter(flight => {
      return moment().diff(moment(flight.createdAt), 'hour') > 72;
    });
    this.props.addFlightTemplates(outdatedFlights);
  };

  render() {
    const { flights } = this.props;
    const { selected } = this.state;

    return (
      <Fragment>
        <div className={buttonGroupStyle}>
          <Button onClick={this.updateOutdatedFlights}>
            Update outdated deals
          </Button>
        </div>
        <DealPartialForm
          selectedFlights={selected}
          afterPost={this.handleDealPost}
        />
        {flights.map(flight => {
          const isSelected = selected.includes(flight._id);

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

const buttonGroupStyle = css`
  max-width: 800px;
  margin: auto;
  display: grid;
  justify-items: flex-end;
`;

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
