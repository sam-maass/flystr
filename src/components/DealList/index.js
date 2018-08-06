import React from 'react';
import PropTypes from 'prop-types';
import DealCard from './DealCard';
import { css } from 'emotion';

const style = css`
  margin: 8px;
`;

const DealList = ({ deals = [] }) => {
  return (
    <div className={style}>
      {deals.map(deal => <DealCard key={deal._id} deal={deal} />)}
    </div>
  );
};

DealList.propTypes = {
  deals: PropTypes.array
};

export default DealList;
