import React from 'react';
import DealCard from '../DealCard';
import nycImage from '../../images/NYC.jpg';
import athImage from '../../images/ATH.jpg';
import blqImage from '../../images/BLQ.jpg';
import { css } from 'emotion';

const gridStyle = css`
  margin-top: 32px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const DealCardGrid = () => {
  return (
    <div className={gridStyle}>
      <DealCard
        image={nycImage}
        title="USA"
        dates="June 2019"
        duration="16 Days"
        oldPrice="700 EUR"
        newPrice="412 EUR"
      />
      <DealCard
        image={athImage}
        title="Greece"
        dates="April - August 2019"
        duration="21 Days"
        oldPrice="600 EUR"
        newPrice="258 EUR"
      />
      <DealCard
        image={blqImage}
        title="Bologna/Italy"
        dates="September 2018"
        duration="5 Days"
        oldPrice="200 EUR"
        newPrice="46 EUR"
      />
    </div>
  );
};

export default DealCardGrid;
