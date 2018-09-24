import React from 'react';
import SadIcon from '@material-ui/icons/TimerOutlined';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import EmptyState from '../EmptyState';

const NoDeal = () => {
  return (
    <div className={expiredStyle}>
      <div>
        <EmptyState title="This deal has expired" icon={<SadIcon />} />
        <Link to="/deals">
          <Button fullWidth variant="raised" color="primary">
            Find other deals
          </Button>
        </Link>
      </div>
    </div>
  );
};

const expiredStyle = css`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  div {
    display: grid;
  }
  a {
    text-decoration: none;
  }
`;

export default NoDeal;
