import React from 'react';
import { Card, Button } from '@material-ui/core';
import { css } from 'emotion';
import { classes } from '../../styles';
import { Link } from 'react-router-dom';

const style = css`
  ${classes.typography.base};
  /* color: #fafafa; */
  height: 135px;
  background-image: linear-gradient(to right top, #ff8008, #ffc837);
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  h4 {
    margin: 0;
  }
`;
export function PremiumUpgradePanel() {
  return (
    <Card>
      <div className={style}>
        <h4>
          You reached the trip limit
          <br /> of the free account
        </h4>
        <div>
          <Link to="/settings#premium">
            <Button variant="raised" color="primary" size="large">
              Upgrade to Premium
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
