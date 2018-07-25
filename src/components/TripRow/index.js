import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DealCard from '../DealCard';
import { getTimeframeString, getDurationString } from '../../utils';
import { getAirportImage } from '../../getAirportImage';
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
  matchingDeals,
  endDate,
  _id,
  budget,
  destinations = []
}) => {
  const minPrice = Math.min([...matchingDeals.map(d => d.price)]);
  return (
    <div className={style}>
      <Link to={`/trip/${_id}`}>
        <DealCard
          title={name}
          dealCount={matchingDeals.length}
          image={getAirportImage(destinations[0])}
          dates={getTimeframeString({ startDate, endDate })}
          duration={getDurationString({ toDuration, fromDuration })}
          newPrice={minPrice ? `${minPrice} EUR` : undefined}
          oldPrice={minPrice ? `${budget} EUR` : undefined}
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
  toDuration: PropTypes.string,
  fromDuration: PropTypes.string,
  name: PropTypes.string,
  budget: PropTypes.number,
  destinations: PropTypes.arrayOf(PropTypes.string),
  matchingDeals: PropTypes.array
};

export default TripRow;
