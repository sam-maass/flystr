import React from 'react';
import AirportSuggest from '../AirportSuggest';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const style = css`
  max-width: 1024px;
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 8px;
  margin: auto;
  height: 100%;
  ${classes.typography.base};
  h2 {
    ${classes.typography.base};
  }
  .secondary {
    color: ${styles.colors.lightGray};
    font-size: 0.9em;
  }
  .button {
    align-self: flex-end;
    bottom: 8px;
  }
`;

class DestinationSelection extends React.Component {
  constructor(props) {
    super(props);
    this.addAirport = this.addAirport.bind(this);
  }

  addAirport = code => {
    this.props.setFieldValue(
      'destinations',
      this.props.values.destinations.concat(code)
    );
  };

  render() {
    const { props } = this;
    const hasSelection = props.values.destinations.length > 0;
    const label = hasSelection
      ? 'Add more destinations'
      : 'Select a destination';
    const goToNextPage = () => {
      props.setTouched({ destinations: true });
      props.validateForm();
      const isSelectionValid =
        props.touched.destinations && !props.errors.destinations;
      if (isSelectionValid) {
        props.setFieldValue('page', 3);
      }
    };
    return (
      <div className={style}>
        <div>
          <h2>Where do you want to go?</h2>
          <AirportSuggest elemKey="destinations" label={label} {...props} />
          <p className="secondary">
            Need some inpiration? How about:
            <ul>
              <li onClick={() => this.addAirport('DPS')}>Bali</li>
              <li onClick={() => this.addAirport(['JFK', 'EWR'])}>New York</li>
              <li onClick={() => this.addAirport('CPT')}>Capetown</li>
              <li onClick={() => this.addAirport('BCN')}>or Barcelona</li>
            </ul>
          </p>
        </div>
        <div className="button">
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={goToNextPage}
          >
            Set Preferences
          </Button>
        </div>
      </div>
    );
  }
}

DestinationSelection.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired
};
export default DestinationSelection;
