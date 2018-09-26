import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { getDestinationImage } from '../../getDestinationImage';
import { classes, styles } from '../../styles';
import TripDealList from '../TripDealList/component';
import { Link } from 'react-router-dom';

const style = destination => css`
  ${classes.typography.base};
  min-height: 200px;
  height: 40vh;
  background-image: url(${getDestinationImage('header', destination)});
  background-size: cover;
  background-repeat: no-repeat;
  .backdrop {
    min-height: 200px;
    height: 40vh;
    display: grid;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
  .badgeContainer {
    justify-self: end;
    margin: 16px;
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
    align-self: center;
    justify-self: center;
    text-align: center;
    .title {
      ${classes.typography.h2};
      color: ${styles.colors.white};
      line-height: 1;
    }
    .subtitle {
      ${classes.typography.title};
      color: ${styles.colors.white};
    }
    .main {
      margin-top: 32px;
      ${classes.typography.title};
      color: ${styles.colors.white};
    }
  }
`;

const signupCardStyle = css`
  max-width: 600px;
  margin: auto;
  padding: 16px;
  ${classes.typography.base};
  font-size: 14px;
  color: ${styles.colors.midGray};
  text-align: center;
`;

const DealView = ({ deal }) => {
  const { title, subtitle } = deal;
  if (deal.destinations === undefined) {
    return null;
  } else {
    return (
      <Fragment>
        <div className={style(deal.destinations[0])}>
          <div className="header">
            <div className="backdrop">
              <div className="badgeContainer">
                <span className="badge deal">
                  from {deal.minPrice} {deal.currency || 'EUR'}
                </span>
              </div>
              <div className="infos">
                <div className="title">{title}</div>
                <div className="subtitle">from {subtitle}</div>

                <div className="main">Example Dates: </div>
              </div>
            </div>
          </div>
        </div>
        <TripDealList flights={deal.exampleFlights} />
        <div className={signupCardStyle}>
          <strong>Why are there not more dates?</strong> <br /> <br />
          Creating and maintaining deals takes a lot of time. That is why we
          only show some dates to give you an idea of the general availability.
          <br />
          <br />
          The easiest way to get your perfect dates is to{' '}
          <Link to="/signup">sign up</Link>. As a flystr user you can create a
          trip and we will try to find deals matching your date preferences.{' '}
          <br />
          <br /> If you don't want to sign up you can search for cheap flights
          on{' '}
          <a
            href="flights.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Flights
          </a>{' '}
          and then use{' '}
          <a href="momondo.com" target="_blank" rel="noopener noreferrer">
            Momondo
          </a>{' '}
          or{' '}
          <a href="skyscanner.com" target="_blank" rel="noopener noreferrer">
            Skyscanner
          </a>
          .
        </div>
      </Fragment>
    );
  }
};

DealView.propTypes = {
  deal: PropTypes.object
};

export default DealView;
