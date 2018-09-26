import React from 'react';
import PropTypes from 'prop-types';
import DealPanel from '../DealPanel';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import InfoPanel from './InfoPanel';
import { connect } from 'react-redux';

const TripList = ({ flights = [], userId }) => {
  const augmentedFlights = flights.map(flight => {
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

  return (
    <div className={style}>
      {cityPairs.map((pair, key) => (
        <div key={key}>
          <div className="cityPair">
            <div>{pair}</div>
          </div>
          {augmentedFlights
            .filter(f => f.cityPair === pair)
            .map((item, key) => (
              <DealPanel elevation={0} key={key} {...item} />
            ))}
          {!userId && <InfoPanel />}
        </div>
      ))}
    </div>
  );
};

TripList.propTypes = { flights: PropTypes.array, userId: PropTypes.string };

const style = css`
  margin-top: 8;
  display: 'grid';
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
    ...props
  };
};

export default connect(mapStateToProps)(TripList);
