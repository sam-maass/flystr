import React from 'react';
import PropTypes from 'prop-types';
import TripRow from '../TripRow';
import { css } from 'emotion';

const TripList = ({ trips = [] }) => {
  return (
    <div className={style}>
      {trips.map((item, key) => (
        <TripRow key={key} {...item} />
      ))}
    </div>
  );
};

TripList.propTypes = { trips: PropTypes.array, classes: PropTypes.object };

const style = css`
  max-width: 1300px;
  margin: auto;
  margin-top: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin-top: 16px;
    gap: 16px 32px;
  }
`;

export default TripList;
