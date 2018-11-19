import PropTypes from 'prop-types';
import React from 'react';
import { classes, styles } from '../../styles';
import { css } from 'emotion';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';

const style = css`
  ${classes.typography.base};
  h3,
  h4 {
    margin: 24px 0 8px 0px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  padding: 8px 24px;
  ul {
    padding: 0;
    list-style: none;
    li {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: 24px 1fr;
      align-items: center;
      line-height: 2;
    }
    svg {
      color: ${styles.colors.green2};
    }
  }
  .selection-grid {
    display: grid;
    grid-gap: 8px 0px;
    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .selection-item {
      cursor: pointer;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #fff;
      z-index: 1;
      transition: background-color 0.7s, transform 0.3s;
      &:hover {
        transform: scale(1.1);
        z-index: 2;
        background-color: #fafafa;
      }
      &.active {
        transform: scale(1.1);
        z-index: 5;
        border: 1px solid ${styles.colors.green2};
        background-color: #def6c2;
      }
    }
  }
  .plan-info {
    padding-top: 4px;
  }
  small {
    line-height: 1.25;
    letter-spacing: 0;
    color: ${styles.colors.lightGray};
  }
`;

export const PlanSelection = ({ handlePlanChange, selectedPlan }) => {
  const isActive = interval => {
    if (selectedPlan === interval) return 'active';
  };

  return (
    <div className={style}>
      <h3>Upgrade to Premium</h3>
      <ul>
        <li>
          <CheckIcon />
          instant price drop notifications
        </li>
        <li>
          <CheckIcon />
          up to 20 customizable trips
        </li>
        <li>
          <CheckIcon />
          access to premium deals
        </li>
      </ul>
      <h4>Choose your plan</h4>
      <div className="selection-grid">
        <div
          className={`selection-item ${isActive('monthly')}`}
          onClick={handlePlanChange('monthly')}
        >
          <b>1 Month Membership</b>
          <br />
          1,99 EUR <br />
          <small>1,99 EUR/month</small>
        </div>
        <div
          className={`selection-item ${isActive('quarterly')}`}
          onClick={handlePlanChange('quarterly')}
        >
          <b>3 Months Membership</b>
          <br />
          5,49 EUR <br />
          <small>1,83 EUR/month</small>
        </div>
        <div
          className={`selection-item ${isActive('yearly')}`}
          onClick={handlePlanChange('yearly')}
        >
          <b>1 Year Membership</b>
          <br />
          19,99 EUR <br />
          <small>1,67 EUR/month</small>
        </div>
      </div>
      <div className="plan-info">
        <small>
          All memberships will auto-renew. You can cancel up to 24 hours before
          the expiry date of your membership.
        </small>
      </div>
      <h4>Enter Payment Details</h4>
    </div>
  );
};

PlanSelection.propTypes = {
  selectedPlan: PropTypes.string,
  handlePlanChange: PropTypes.func
};
