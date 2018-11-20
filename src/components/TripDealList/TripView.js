import React from 'react';
import PropTypes from 'prop-types';
import { getDurationString, getTimeframeString } from '../../utils';
import { css } from 'emotion';
import { getDestinationImage } from '../../getDestinationImage';
import { classes, styles } from '../../styles';

const style = destination => css`
  ${classes.typography.base};
  min-height: 200px;
  height: 40vh;
  background-image: url(${getDestinationImage('header', destination)});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1024px) {
    background-image: url(${getDestinationImage('header-wide', destination)});
  }
  .backdrop {
    min-height: 200px;
    height: 40vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    );
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
  .title {
    ${classes.typography.h2};
    color: ${styles.colors.white};
    align-self: center;
    justify-self: center;
  }
  .infos {
    letter-spacing: 0.1em;
    font-size: 14px;
    padding: 8px;
    align-self: end;
    color: ${styles.colors.white};
  }
`;

const TripView = ({ children, trip }) => {
  const dealCount = trip.matchingFlights && trip.matchingFlights.length;
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
          <div className="title">{trip.name}</div>
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
  children: PropTypes.object,
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
