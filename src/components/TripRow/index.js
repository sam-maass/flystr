import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TripCard from '../TripCard';
import { getTimeframeString, getDurationString } from '../../utils';
import { css } from 'emotion';

const style = css`
  a {
    text-decoration: none;
  }
`;

const TripRow = ({
  toDuration,
  fromDuration,
  name,
  startDate,
  matchingFlights,
  endDate,
  _id,
  budget,
  destinations = [],
  minPrice,
  currency,
  createdAt
}) => {
  return (
    <div className={style}>
      <Link to={`/trip/${_id}`}>
        <TripCard
          destinations={destinations}
          title={name}
          createdAt={createdAt}
          dealCount={matchingFlights.length}
          dates={getTimeframeString({ startDate, endDate })}
          duration={getDurationString({ toDuration, fromDuration })}
          newPrice={minPrice ? `${minPrice} ${currency}` : undefined}
          oldPrice={budget > 0 && `${budget} EUR`}
        />
      </Link>
    </div>
  );
};

TripRow.propTypes = {
  _id: PropTypes.string,
  classes: PropTypes.object,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  toDuration: PropTypes.number,
  fromDuration: PropTypes.number,
  name: PropTypes.string,
  budget: PropTypes.number,
  destinations: PropTypes.arrayOf(PropTypes.string),
  matchingFlights: PropTypes.array,
  minPrice: PropTypes.number,
  currency: PropTypes.string,
  createdAt: PropTypes.string
};

export default TripRow;
