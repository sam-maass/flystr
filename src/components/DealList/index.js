//@ts-check

import React from 'react';
import PropTypes from 'prop-types';
import DealCard from './DealCard';
import { css } from 'emotion';
import MoreDealsCard from '../MoreDealsCard';
import { PayLessCard, NoHassleCard, BucketListCard } from '../UspCards';
import { classes, styles } from '../../styles';
import { Underlined } from '../Typography/Underlined';
import { Typography } from '../Typography/Typography';
import { RegionMenu } from '../RegionMenu';

const style = css`
  max-width: 1400px;
  margin: auto;
  margin-top: 8px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin-top: 16px;
    grid-gap: 32px 64px;
  }
  .related-deals {
    grid-column: 1;
    grid-column-end: -1;
    ${classes.typography.base};
    text-align: center;
    color: ${styles.colors.darkGray};
    justify-self: center;
  }
`;

const DealList = ({ deals = [], activeDeal, isLoggedIn, region }) => {
  if (deals[0] === undefined) return null;
  const dealCount = deals.length;
  const dealsBetweenCards = 3;
  const hasActiveDeal = activeDeal === deals[0].slug;
  let activeDeals = [];

  if (hasActiveDeal) {
    activeDeals = deals.splice(0, 1);
  }
  const firstDeals = deals.splice(0, dealsBetweenCards - 1);
  const secondDeals = deals.splice(0, dealsBetweenCards + 1);
  const thirdDeals = deals.splice(0, dealsBetweenCards + 1);
  return (
    <div className={style}>
      <RegionMenu region={region} />
      {hasActiveDeal && (
        <>
          {activeDeals.map(deal => (
            <DealCard key={Math.random()} deal={deal} highlighted />
          ))}
          <div className="related-deals">
            <Underlined>
              <Typography variant="h2">Similar Deals</Typography>
            </Underlined>
          </div>
        </>
      )}
      {firstDeals.map(deal => (
        <DealCard key={Math.random()} deal={deal} /> // deal._id was not working as key. It was complaining about duplicate keys
      ))}
      {!isLoggedIn && dealCount > 2 && <PayLessCard />}

      {secondDeals.map(deal => (
        <DealCard key={Math.random()} deal={deal} /> // deal._id was not working as key. It was complaining about duplicate keys
      ))}
      {!isLoggedIn && dealCount > 6 && <NoHassleCard />}

      {thirdDeals.map(deal => (
        <DealCard key={Math.random()} deal={deal} /> // deal._id was not working as key. It was complaining about duplicate keys
      ))}
      {!isLoggedIn && dealCount > 10 && <BucketListCard />}
      {deals.map(deal => (
        <DealCard key={Math.random()} deal={deal} />
      ))}
      <MoreDealsCard />
    </div>
  );
};

DealList.propTypes = {
  deals: PropTypes.array,
  region: PropTypes.string,
  activeDeal: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

export default DealList;
