import React from 'react';
import PropTypes from 'prop-types';
import TripRow from '../TripRow';
import { css } from 'emotion';

const TripList = ({ trips = [] }) => {
  return (
    <div className={style}>
      {trips.map((item, key) => <TripRow key={key} {...item} />)}
    </div>
  );
};

TripList.propTypes = { trips: PropTypes.array, classes: PropTypes.object };

const style = css`
  margin-top: 8px;
  display: grid;
`;

export default TripList;
