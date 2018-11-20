import { FreeAccountInfo } from './FreeAccountInfo';
import { PremiumAccountInfo } from './PremiumAccountInfo';
import { PurchaseProcessingDialog } from './PurchaseProcessingDialog';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const InnerComponent = props => {
  const {
    purchasePending,
    stripeSubscription = {
      plan: {}
    }
  } = props.user;

  const {
    interval,
    interval_count,
    amount,
    currency
  } = stripeSubscription.plan;

  const activeAccountType = interval ? 'premium' : 'free';
  const nextRenewal = moment
    .unix(stripeSubscription.current_period_end)
    .format('DD.MM.YYYY');

  if (purchasePending) {
    return <PurchaseProcessingDialog />;
  } else if (activeAccountType === 'premium') {
    return (
      <PremiumAccountInfo
        isCanceled={Boolean(stripeSubscription.canceled_at)}
        interval_count={interval_count}
        interval={interval}
        nextRenewal={nextRenewal}
        currency={currency}
        amount={amount}
      />
    );
  } else {
    return <FreeAccountInfo openPremiumDialog={props.openPremiumDialog} />;
  }
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user
  };
};

export const AccountTypeSetting = connect(mapStateToProps)(InnerComponent);
