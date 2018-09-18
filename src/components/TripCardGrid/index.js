import React from 'react';
import { css } from 'emotion';
import DealCard from '../DealList/DealCard';
import PropTypes from 'prop-types';

const gridStyle = css`
  margin-top: 32px;
  margin-bottom: 64px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TripCardGrid = ({ deals }) => {
  return (
    <div className={gridStyle}>
      {deals.map((deal, index) => (
        <DealCard key={index} deal={deal} />
      ))}
    </div>
  );
};
TripCardGrid.propTypes = {
  deals: PropTypes.array
};

export default TripCardGrid;
