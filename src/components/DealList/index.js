import React from 'react';
import PropTypes from 'prop-types';
import DealCard from './DealCard';
import { css } from 'emotion';
import MoreDealsCard from '../MoreDealsCard';
import FilterDealsCard from '../FilterDealsCard';

const style = css`
  max-width: 1400px;
  margin: auto;
  margin-top: 8px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin-top: 16px;
    gap: 32px 64px;
  }
`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const minFirstDeals = 4;
const minRestDeals = 1;

const DealList = ({ deals = [] }) => {
  if (deals[0] === undefined) return null;
  const filterDealsCardPosition = getRandomInt(
    minFirstDeals,
    deals.length - minRestDeals
  );
  const firstDeals = deals.splice(0, filterDealsCardPosition);
  return (
    <div className={style}>
      {firstDeals.map(deal => (
        <DealCard key={deal._id} deal={deal} />
      ))}
      <FilterDealsCard />
      {deals.map(deal => (
        <DealCard key={deal._id} deal={deal} />
      ))}
      <MoreDealsCard />
    </div>
  );
};

DealList.propTypes = {
  deals: PropTypes.array
};

export default DealList;
