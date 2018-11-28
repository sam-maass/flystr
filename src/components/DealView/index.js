import { WatchlistButton } from './../WatchlistButton/index';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { getDestinationImage } from '../../getDestinationImage';
import { classes, styles } from '../../styles';
import TripDealList from '../TripDealList/component';
import { ModalLink } from '../ModalLink';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
      rgba(0, 0, 0, 0.2)
    );
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
      ${classes.typography.h1};
      color: ${styles.colors.white};
      font-size: 30px;
      line-height: 1;
    }
    .subtitle {
      ${classes.typography.title};
      color: ${styles.colors.white};
      margin-bottom: 32px;
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
  const { title, subtitle, slug } = deal;
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
                <WatchlistButton dealId={deal._id} />
              </div>
            </div>
          </div>
        </div>
        <TripDealList flights={deal.exampleFlights} />
        <div className={signupCardStyle}>
          <strong>Why are the prices not always accurate?</strong> <br /> <br />
          Ticket prices to {title} change all the time. We do our best to keep
          the prices up to date but sometimes a good deal is just gone.
          <br />
          <br />
          <strong>Why can't I find the dates I need.</strong> <br /> <br />
          The easiest way to stay updated on cheap flights to {title} for your
          particular dates is to <ModalLink modal="signup">sign up</ModalLink>{' '}
          and add this deal to your watchlist. We will notify you as soon as we
          get new dates.
          <br />
          <br />
          <strong>Where can I find flights to XXX?</strong>
          <br />
          <br />
          You can either{' '}
          <ModalLink modal="signup">
            create a trip in you watchlist
          </ModalLink>{' '}
          and let us search for flights or you can take a look at similar flight
          deals to this.
          <br />
          <br />
          <Link to={`/deals?activeDeal=${slug}`}>
            <Button fullWidth variant="contained" color="primary">
              Find Similar Deals
            </Button>
          </Link>
        </div>
      </Fragment>
    );
  }
};

DealView.propTypes = {
  deal: PropTypes.object
};

export default DealView;
