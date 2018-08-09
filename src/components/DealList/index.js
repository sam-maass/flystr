import React from 'react';
import PropTypes from 'prop-types';
import DealCard from './DealCard';
import { css } from 'emotion';

const style = css`
  max-width: 1400px;
  margin: auto;
  margin-top: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin-top: 16px;
    gap: 32px 64px;
  }
`;

const DealList = ({ deals = [] }) => {
  return (
    <div className={style}>
      {deals.map(deal => (
        <DealCard key={deal._id} deal={deal} />
      ))}
    </div>
  );
};

DealList.propTypes = {
  deals: PropTypes.array
};

export default DealList;
