import React from 'react';
import PropTypes from 'prop-types';
import { getDurationString, getTimeframeString } from '../../utils';
import { css } from 'emotion';
import { getAirportHeader } from '../../getAirportHeader';
import { classes, styles } from '../../styles';

const style = destination => css`
  ${classes.typography.base};
  letter-spacing: 0.1em;
  height: 175px;
  background-image: url(${getAirportHeader(destination)});
  background-size: cover;
  background-repeat: no-repeat;
  .backdrop {
    height: 175px;
    display: grid;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
  .badgeContainer {
    justify-self: end;
    margin: 8px;
    .badge {
      font-size: 0.8em;
      padding: 2px 6px;
      font-weight: bold;
      border-radius: 8px;
      &.deal {
        background-color: ${styles.colors.orange};
        color: ${styles.colors.white};
      }
      &.active {
        background-color: ${styles.colors.green3};
        color: ${styles.colors.white};
      }
    }
  }
  .infos {
    font-size: 14px;
    padding: 8px;
    align-self: end;
    color: ${styles.colors.white};
  }
`;

const TripView = ({ children, trip }) => {
  const dealCount = trip.matchingDeals.length;
  const dealString =
    dealCount === 1 ? `${dealCount} Deal` : `${dealCount} Deals`;
  return (
    <div className={style(trip.destinations[0])}>
      <div className="header">
        <div className="backdrop">
          <div className="badgeContainer">
            {dealCount > 0 && <span className="badge deal">{dealString}</span>}
            {dealCount === 0 && <span className="badge active">active</span>}
          </div>
          <div className="infos">
            <div>
              <b>{getSubheaderString(trip)}</b>
            </div>
            <div>Departure Airports: {trip.origins.join(', ')}</div>
            <div>Destination Airports: {trip.destinations.join(', ')}</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

TripView.propTypes = {
  children: PropTypes.array,
  trip: PropTypes.object
};

export default TripView;

function getSubheaderString(trip) {
  const budget = `max. ${trip.budget} EUR`;
  const subheaderData = [];
  if (trip.fromDuration) {
    subheaderData.push(getDurationString(trip));
  }
  subheaderData.push(getTimeframeString(trip));
  subheaderData.push(budget);
  return subheaderData.join(' • ');
}
