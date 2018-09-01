import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { getDestinationImage } from '../../getDestinationImage';
import { classes, styles } from '../../styles';
import TripDealList from '../TripDealList/component';
import { Link } from 'react-router-dom';

const style = destination => css`
  ${classes.typography.base};
  height: 200px;
  background-image: url(${getDestinationImage('header', destination)}),
    url(${getDestinationImage('header', destination, { fallback: true })});
  background-size: cover;
  background-repeat: no-repeat;
  .backdrop {
    height: 200px;
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
    letter-spacing: 0.1em;
    font-size: 14px;
    padding: 8px;
    align-self: end;
    color: ${styles.colors.white};
  }
`;

const signupCardStyle = css`
  margin: 8px;
  padding: 16px;
  ${classes.typography.base};
  font-size: 14px;
  color: ${styles.colors.midGray};
  text-align: center;
`;

const DealView = ({ deal }) => {
  if (deal.destinations === undefined) {
    return null;
  } else {
    return (
      <Fragment>
        <div className={style(deal.destinations[0])}>
          <div className="header">
            <div className="backdrop">
              <div className="badgeContainer">
                <span className="badge deal">from {deal.minPrice} EUR</span>
              </div>
              <div className="infos">
                <div>
                  <b>{deal.title}</b>
                </div>
                <div>Departure Airports: {deal.origins.join(', ')}</div>
                <div>Destination Airports: {deal.destinations.join(', ')}</div>
              </div>
            </div>
          </div>
        </div>
        <TripDealList trips={deal.exampleFlights} />
        <div className={signupCardStyle}>
          <strong>Not the dates you are looking for?</strong> <br /> <br />
          <Link to="/new-trip">Create a trip</Link> <br />
          and get alerts when your dates becomes available
        </div>
      </Fragment>
    );
  }
};

DealView.propTypes = {
  deal: PropTypes.object
};

export default DealView;
