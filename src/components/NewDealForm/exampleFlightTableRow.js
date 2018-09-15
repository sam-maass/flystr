import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SelectLink from './selectLink';

class exampleFlightTableRow extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange = e => {
    const { flight, index } = this.props;
    const { name: key, value } = e.target;
    this.props.handleChangeFlight({ ...flight, [key]: value }, index);
  };

  handleLinkChange = link => {
    const { flight, index } = this.props;
    this.props.handleChangeFlight(
      {
        ...flight,
        link: link.url,
        selectedLink: link.displayName
      },
      index
    );
  };

  render() {
    const { flight, index, handleDeleteFlight } = this.props;
    return (
      <Fragment>
        <SelectLink
          flight={flight}
          selectedLink={flight.selectedLink}
          onChange={this.handleLinkChange}
        />

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
          <Button onClick={() => handleDeleteFlight(index)}>Delete</Button>
        </div>
      </Fragment>
    );
  }
}

exampleFlightTableRow.propTypes = {
  flight: PropTypes.object,
  index: PropTypes.number,
  handleDeleteFlight: PropTypes.func,
  handleChangeFlight: PropTypes.func
};

export default exampleFlightTableRow;
