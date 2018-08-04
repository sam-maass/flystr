import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import FormikTextField from '../FormikTextField';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import { classes } from '../../styles';
import NewExampleFlight from './newExampleFlight';

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
  constructor(props) {
    super(props);
  }

  handleNewFlight = flightDetails => {
    const { exampleFlights = [] } = this.props.values;
    this.props.setFieldValue('exampleFlights', [
      ...exampleFlights,
      flightDetails
    ]);
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
                  <Fragment key={flight.link}>
                    <div className="link">
                      <a href={flight.link}>{flight.linkSource}</a>
                    </div>
                    <div className="outDate ">{flight.outDate}</div>
                    <div className="outDep ">{flight.outDep}</div>
                    <div className="outArr ">{flight.outArr}</div>
                    <div className="outCarriers ">{flight.outCarriers}</div>
                    <div className="inDate ">{flight.inDate}</div>
                    <div className="inDep ">{flight.inDep}</div>
                    <div className="inArr ">{flight.inArr}</div>
                    <div className="inCarriers ">{flight.inCarriers}</div>
                    <div className="price ">{flight.price}</div>
                    <div className="actions " />
                  </Fragment>
                );
              })}
              <NewExampleFlight onSave={this.handleNewFlight} />
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
  setFieldValue: PropTypes.func
};

export default NewDealForm;
