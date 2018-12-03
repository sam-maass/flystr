import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { cancelSubscription } from '../../actions/userActions';

export function InnerPremiumAccountInfo({
  interval_count,
  interval,
  nextRenewal,
  amount,
  currency,
  cancelSubscription,
  isCanceled
}) {
  return (
    <div>
      <b>
        Tripfixed Premium <br />
      </b>
      {(amount / 100).toFixed(2)} {currency.toUpperCase()} /{' '}
      {interval_count > 1 && interval_count} {interval}
      <br />
      {!isCanceled && (
        <>
          Membership active <br /> Next Renewal : {nextRenewal} <br />
          <br />
          <Button
            color="primary"
            variant="outlined"
            onClick={cancelSubscription}
          >
            Cancel Membership
          </Button>
        </>
      )}
      {isCanceled && (
        <span>
          Membership cancelled <br /> Active until: {nextRenewal}
        </span>
      )}
    </div>
  );
}
InnerPremiumAccountInfo.propTypes = {
  isCanceled: PropTypes.bool,
  interval_count: PropTypes.number,
  interval: PropTypes.string,
  nextRenewal: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  cancelSubscription: PropTypes.func
};

export const PremiumAccountInfo = connect(
  null,
  { cancelSubscription }
)(InnerPremiumAccountInfo);
