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
  }
  .button {
    align-self: flex-end;
    bottom: 8px;
  }
`;

const DestinationSelection = props => {
  const hasSelection = props.values.destinations.length > 0;
  const label = hasSelection ? 'Add more destinations' : 'Select a destination';
  const isPageValid = props.touched.destinations && !props.errors.destinations;
  return (
    <div className={style}>
      <div>
        <h2>Where do you want to go?</h2>
        <AirportSuggest elemKey="destinations" label={label} {...props} />
        <p className="secondary">
          Need some inpiration? How about:
          <ul>
            <li>Bali</li>
            <li>New York</li>
            <li>Capetown</li>
            <li>or Barcelona</li>
          </ul>
        </p>
      </div>
      <div className="button">
        <Button
          disabled={!isPageValid}
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => props.setFieldValue('page', 2)}
        >
          {' '}
          Select Dates{' '}
        </Button>
      </div>
    </div>
  );
};

DestinationSelection.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired
};
export default DestinationSelection;
