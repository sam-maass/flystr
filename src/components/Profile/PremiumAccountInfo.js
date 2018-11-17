import React from 'react';
import PropTypes from 'prop-types';

export function PremiumAccountInfo({
  interval_count,
  interval,
  nextRenewal,
  amount,
  currency
}) {
  return (
    <div>
      <b>
        Flystr Premium <br />
      </b>
      {(amount / 100).toFixed(2)} {currency.toUpperCase()} /{' '}
      {interval_count > 1 && interval_count} {interval}
      <br />
      next renewal: {nextRenewal}
    </div>
  );
}
PremiumAccountInfo.propTypes = {
  interval_count: PropTypes.number,
  interval: PropTypes.string,
  nextRenewal: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
};
