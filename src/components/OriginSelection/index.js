import React from 'react';
import AirportSuggest from '../AirportSuggest';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import NextIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const style = css`
  max-width: 1024px;
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 16px;
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
    justify-self: center;
    margin: 16px;
    .content {
      display: grid;
      grid-gap: 8px;
      align-items: center;
      grid-template-columns: 1fr 24px;
    }
  }
`;

const OriginSelection = props => {
  const hasSelection = props.values.origins.length > 0;
  const goToNextPage = () => {
    props.setTouched({ origins: true });
    props.validateForm();

    const isSelectionValid = props.touched.origins && !props.errors.origins;
    if (isSelectionValid) {
      props.setFieldValue('page', 2);
    }
  };
  const label = hasSelection
    ? 'Add more depature airports'
    : 'Select a departure airport';
  return (
    <div className={style}>
      <div>
        <h2>From where can you start your trip?</h2>
        <AirportSuggest elemKey="origins" label={label} {...props} />
        <p className="secondary">
          If you select multiple depature airports you&apos;ll have a higher
          chance of getting a good deal
        </p>
      </div>
      <div className="button">
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          onClick={() => goToNextPage()}
        >
          <span className="content">
            Select your destinations <NextIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};

OriginSelection.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired
};
export default OriginSelection;
