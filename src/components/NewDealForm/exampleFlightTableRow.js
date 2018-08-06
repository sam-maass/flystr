import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class exampleFlightTableRow extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange = e => {
    const { flight } = this.props;
    const { name: key, value } = e.target;
    this.props.handleChangeFlight({ ...flight, [key]: value });
  };

  render() {
    const { flight, handleDeleteFlight } = this.props;
    return (
      <Fragment>
        <div className="link">
          <a href={flight.link} target="_blank" rel="noopener noreferrer">
            {flight.linkSource}
          </a>
        </div>
        <div className="outDate ">
          <input
            type="text"
            name="outDate"
            value={flight.outDate}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="outDep ">
          <input
            type="text"
            name="outOrigin"
            value={flight.outOrigin}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="outArr ">
          <input
            type="text"
            name="outDestination"
            value={flight.outDestination}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="outCarriers ">
          <input
            type="text"
            name="outCarriers"
            value={flight.outCarriers}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="inDate ">
          <input
            type="text"
            name="inDate"
            value={flight.inDate}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="inDep ">
          <input
            type="text"
            name="inOrigin"
            value={flight.inOrigin}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="inArr ">
          <input
            type="text"
            name="inDestination"
            value={flight.inDestination}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="inCarriers ">
          <input
            type="text"
            name="inCarriers"
            value={flight.inCarriers}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="price ">
          <input
            type="text"
            name="price"
            value={flight.price}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="actions ">
          <Button onClick={() => handleDeleteFlight(flight.link)}>
            Delete
          </Button>
        </div>
      </Fragment>
    );
  }
}

exampleFlightTableRow.propTypes = {
  flight: PropTypes.object,
  handleDeleteFlight: PropTypes.func,
  handleChangeFlight: PropTypes.func
};

export default exampleFlightTableRow;
