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
  endDate,
  budget,
  _id,
  destinations = []
}) => {
  return (
    <div className={style}>
      <Link to={`/trip/${_id}`}>
        <DealCard
          title={name}
          image={getAirportImage(destinations[0])}
          dates={getTimeframeString({ startDate, endDate })}
          duration={getDurationString({ toDuration, fromDuration })}
          oldPrice={`${budget} EUR`}
          newPrice={`${budget - 50} EUR`}
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
  destinations: PropTypes.arrayOf(PropTypes.string)
};

export default TripRow;
