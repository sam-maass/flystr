import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import FormikTextField from '../FormikTextField';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import { classes } from '../../styles';
import NewExampleFlight from './newExampleFlight';
import moment from 'moment';
import ExampleFlightTableRow from './exampleFlightTableRow';

const style = css`
  display: grid;
  .flights {
    ${classes.typography.base};

    display: grid;
    grid-template-columns: 2fr repeat(9, 1fr) 2fr;
    gap: 8px;
    .header {
      font-weight: bold;
    }
    div {
      overflow: hidden;
      background-color: #eaeaea;
    }
    .link {
      grid-column: 1;
      &.fullwidth {
        grid-column: 1 / span 10;
      }
    }
    .outDate {
      grid-column: 2;
    }
    .outDep {
      grid-column: 3;
    }
    .outArr {
      grid-column: 4;
    }
    .outCarriers {
      grid-column: 5;
    }
    .inDate {
      grid-column: 6;
    }
    .inDep {
      grid-column: 7;
    }
    .inArr {
      grid-column: 8;
    }
    .inCarriers {
      grid-column: 9;
    }
    .price {
      grid-column: 10;
    }
    .actions {
      grid-column: 11;
    }
  }
`;

class NewDealForm extends React.Component {
  state = {
    editableFlight: {}
  };

  constructor(props) {
    super(props);
  }

  handleNewFlight = flightDetails => {
    const { exampleFlights = [] } = this.props.values;
    const flights = [...exampleFlights, ...flightDetails];
    const dealData = this.calcDealData(flights);
    this.props.setValues({
      exampleFlights: flights,
      ...dealData
    });
  };

  handleDeleteFlight = link => {
    const { exampleFlights: prevFlights } = this.props.values;
    const exampleFlights = prevFlights.filter(flight => flight.link !== link);
    const dealData = this.calcDealData(exampleFlights);
    this.props.setValues({ ...dealData, exampleFlights });
  };

  handleChangeFlight = flight => {
    const { exampleFlights } = this.props.values;
    const index = exampleFlights.findIndex(
      eFlight => eFlight.link === flight.link
    );
    exampleFlights[index] = flight;
    const dealData = this.calcDealData(exampleFlights);
    this.props.setValues({ ...dealData, exampleFlights });
  };

  calcDealData = flights => {
    const destinations = [
      ...new Set([...flights.map(flight => flight.outDestination)])
    ];
    const origins = [...new Set([...flights.map(flight => flight.outOrigin)])];
    const minPrice = Math.min(...flights.map(f => f.price).filter(v => v >= 0));
    const firstDepature = moment
      .min(...flights.map(f => moment(f.outDate)))
      .format('YYYY-MM-DD');
    const lastReturn = moment
      .max(...flights.map(f => moment(f.inDate)))
      .format('YYYY-MM-DD');
    const title = `Flights from ${origins} to ${destinations}`;
    return {
      title,
      origins,
      destinations,
      minPrice,
      firstDepature,
      lastReturn
    };
  };

  render() {
    const { exampleFlights = [] } = this.props.values;
    return (
      <div>
        <Form>
          <FormikTextField
            elemKey="title"
            type="text"
            label="Title"
            {...this.props}
          />
          <div>{this.props.values.origins}</div>
          <div>{this.props.values.destinations}</div>
          <div>{this.props.values.minPrice}</div>
          <div>{this.props.values.firstDepature}</div>
          <div>{this.props.values.lastReturn}</div>
          <div className={style}>
            Flights: <br />
            <div className="flights">
              <div className="link header">Link</div>
              <div className="outDate header">Out Date</div>
              <div className="outDep header">Out Dep</div>
              <div className="outArr header">Out Arr</div>
              <div className="outCarriers header">Out A/L</div>
              <div className="inDate header">In Date</div>
              <div className="inDep header">In Dep</div>
              <div className="inArr header">In Arr</div>
              <div className="inCarriers header">In A/L</div>
              <div className="price header">Price</div>
              <div className="actions header">Actions</div>
              {exampleFlights.map(flight => {
                return (
                  <ExampleFlightTableRow
                    key={flight.link}
                    flight={flight}
                    handleChangeFlight={this.handleChangeFlight}
                    handleDeleteFlight={this.handleDeleteFlight}
                  />
                );
              })}
              <NewExampleFlight
                flight={this.state.editableFlight}
                handleSave={this.handleNewFlight}
              />
            </div>
          </div>
          <Button
            variant="raised"
            color="primary"
            onClick={this.props.handleSubmit}
          >
            Add deal
          </Button>
        </Form>
      </div>
    );
  }
}

NewDealForm.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func,
  setValues: PropTypes.func,
  setFieldValue: PropTypes.func
};

export default NewDealForm;
