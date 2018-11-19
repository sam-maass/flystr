import { CityPairList } from './CityPairList';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import { connect } from 'react-redux';
import { Button, Paper, TextField } from '@material-ui/core';
import { createDealFromTrip } from '../../actions/tripActions';

const TripList = ({
  flights = [],
  userId,
  isAdmin,
  createDealFromTrip,
  tripId,
  isTrip
}) => {
  const augmentedFlights = flights
    .sort((a, b) => new Date(a.outDate) - new Date(b.outDate))
    .sort((a, b) => a.price - b.price)
    .map(flight => {
      const origin =
        (flight.outOriginDetails && flight.outOriginDetails.city) ||
        flight.outOrigin;
      const destination =
        (flight.outDestinationDetails && flight.outDestinationDetails.city) ||
        flight.outDestination;
      return {
        ...flight,
        cityPair: `${origin} - ${destination}`
      };
    });
  const cityPairs = [...new Set(augmentedFlights.map(f => f.cityPair))];

  const handleCreateDealClick = () => {
    const title = document.getElementById('deal-title').value;
    const subtitle = document.getElementById('deal-subtitle').value;
    if (title === '' || subtitle === '') return;
    createDealFromTrip({ tripId, title, subtitle });
  };
  return (
    <div className={style}>
      {isAdmin &&
        isTrip && (
          <Paper>
            <div className="deal-creation">
              <TextField id="deal-title" label="title" />
              <TextField id="deal-subtitle" label="subtitle" />
              <Button onClick={handleCreateDealClick} color="primary">
                Create Deal
              </Button>
            </div>
          </Paper>
        )}
      {cityPairs.map((pair, key) => (
        <CityPairList
          key={key}
          pair={pair}
          flights={augmentedFlights.filter(f => f.cityPair === pair)}
          showInfoPanel={!userId}
        />
      ))}
    </div>
  );
};

TripList.propTypes = {
  flights: PropTypes.array,
  userId: PropTypes.string,
  isAdmin: PropTypes.bool,
  isTrip: PropTypes.bool,
  createDealFromTrip: PropTypes.func,
  tripId: PropTypes.string
};

const style = css`
  margin-top: 8;
  display: 'grid';
  max-width: 1024px;
  margin: auto;
  .deal-creation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 8px;
  }
  .cityPair {
    margin: 8px 16px;
    ${classes.typography.base};
    line-height: 2;
    padding-left: 16px;
    background: ${styles.colors.blue3};
    color: ${styles.colors.white};
    transform: skew(-20deg); /* SKEW */
    div {
      transform: skew(20deg); /* SKEW */
    }
    .header {
      text-decoration: underline;
      font-size: 0.8em;
    }
  }
`;

const mapStateToProps = (store, props) => {
  return {
    userId: store.user._id,
    isAdmin: store.user.isAdmin,
    ...props
  };
};

export default connect(
  mapStateToProps,
  { createDealFromTrip }
)(TripList);
