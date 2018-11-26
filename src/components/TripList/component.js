import { PremiumUpgradePanel } from './PremiumUpgradePanel';
import React from 'react';
import PropTypes from 'prop-types';
import TripRow from '../TripRow';
import { css } from 'emotion';
import EmailNotificationsHint from '../EmailNotificationHint';

const TripList = ({ trips = [], showPremiumButton }) => {
  return (
    <div className={style}>
      <EmailNotificationsHint />
      {trips.map((item, key) => (
        <TripRow key={key} {...item} />
      ))}
      {showPremiumButton && <PremiumUpgradePanel />}
    </div>
  );
};

TripList.propTypes = {
  trips: PropTypes.array,
  showPremiumButton: PropTypes.bool
};

const style = css`
  max-width: 1300px;
  margin: auto;
  margin-top: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin-top: 16px;
    grid-gap: 16px 32px;
  }
`;

export default TripList;
