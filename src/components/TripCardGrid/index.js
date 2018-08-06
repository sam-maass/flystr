import React from 'react';
import TripCard from '../TripCard';
import { getAirportImage } from '../../getAirportImage';
import { css } from 'emotion';

const gridStyle = css`
  margin-top: 32px;
  margin-bottom: 64px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TripCardGrid = () => {
  return (
    <div className={gridStyle}>
      <TripCard
        image={getAirportImage('NYC')}
        title="USA"
        dates="June 2019"
        duration="16 Days"
        oldPrice="700 EUR"
        newPrice="412 EUR"
      />
      <TripCard
        image={getAirportImage('ATH')}
        title="Greece"
        dates="April - August 2019"
        duration="21 Days"
        oldPrice="600 EUR"
        newPrice="258 EUR"
      />
      <TripCard
        image={getAirportImage('BLQ')}
        title="Bologna/Italy"
        dates="September 2018"
        duration="5 Days"
        oldPrice="200 EUR"
        newPrice="46 EUR"
      />
    </div>
  );
};

export default TripCardGrid;
