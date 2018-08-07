import React from 'react';
import { css } from 'emotion';
import { styles, classes } from '../../styles';

const style = css`
  display: grid;
  grid-template-columns: 1fr minmax(1vw, 1024px) 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  .content {
    ${classes.typography.base};
    align-self: center;
    justify-self: center;
    grid-column: 2;
    text-align: center;
    color: ${styles.colors.lightGray};
    .button {
      color: ${styles.colors.blue2};
      font-size: 150%;
      font-weight: bold;
      vertical-align: bottom;
    }
  }
`;

const EmptyTripList = () => {
  return (
    <div className={style}>
      <div className="content">
        <img src="/world.svg" alt="icon" />
        <h2>Hi and welcome to flystr</h2>
        <p>This is the place where you can see all your planned trips.</p>
        <p>
          Add a new trip by clicking the <span className="button"> + </span>{' '}
          button in the bottom right corner
        </p>
      </div>
    </div>
  );
};

export default EmptyTripList;
