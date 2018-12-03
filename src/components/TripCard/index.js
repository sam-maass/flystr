import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';
import { getDestinationImage } from '../../getDestinationImage';
import moment from 'moment';

const wrapperStyle = css`
  width: 100%;
  max-width: 400px;
`;

const imgStyle = (code, dealCount) => css`
  background-image: url(${getDestinationImage('square', code)});
  filter: opacity(${dealCount > 0 ? 1 : 0.8});
  background-size: cover;
  padding: 8px;
  display: grid;
  align-items: start;
  justify-items: right;
  .badge {
    ${classes.typography.base};
    font-size: 0.8em;
    padding: 2px 6px;
    font-weight: bold;
    border-radius: 8px;
    &.deal {
      background-color: ${styles.colors.orange};
      color: ${styles.colors.white};
    }
    &.no-deal {
      background-color: ${styles.colors.blue1};
      color: ${styles.colors.white};
    }
    &.active {
      background-color: ${styles.colors.green3};
      color: ${styles.colors.white};
    }
  }
  .spinner {
    align-self: center;
    justify-self: center;
  }
`;

const containerStyle = css`
  display: grid;
  grid-template-columns: 40% 60%;
  .content {
    padding: 16px;
  }
`;

const titleStyle = css`
  ${classes.typography.title};
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const oldPriceStyle = css`
  ${classes.typography.base};
  text-decoration: line-through;
  margin-right: 8px;
`;

const newPriceStyle = css`
  ${classes.typography.base};
  font-weight: bold;
  color: ${styles.colors.orange};
`;

const noDealStyle = css`
  ${classes.typography.base};
  font-weight: bold;
  color: ${styles.colors.green3};
`;

const TripCard = ({
  dealCount,
  oldPrice,
  newPrice,
  dates,
  duration,
  title,
  destinations,
  createdAt
}) => {
  const dealString =
    dealCount === 1 ? `${dealCount} Deal` : `${dealCount} Deals`;
  const freshlyCreated =
    moment(createdAt)
      .add(2, 'minutes')
      .diff(moment()) > 0;
  return (
    <div className={wrapperStyle}>
      <Card>
        <div className={containerStyle}>
          <div className={imgStyle(destinations[0], dealCount)}>
            {dealCount > 0 && <span className="badge deal">{dealString}</span>}
            {!freshlyCreated && dealCount === 0 && (
              <span className="badge no-deal">0 Deals</span>
            )}
            {freshlyCreated && dealCount === 0 && (
              <Fragment>
                <span className="badge active">searching ...</span>
                <div className="spinner">
                  <CircularProgress disableShrink />
                </div>
              </Fragment>
            )}
          </div>
          <div className="content">
            <div className={titleStyle}>{title} </div>
            <div className={classes.typography.base}>
              {dates}
              <br />
              {duration}
            </div>
            <div className={classes.typography.base}>
              {dealCount === 0 && !oldPrice && (
                <span className={noDealStyle}>no deals found yet</span>
              )}
              {dealCount === 0 && oldPrice && (
                <span className={noDealStyle}>for under {oldPrice}</span>
              )}
              {dealCount !== 0 && oldPrice && (
                <span className={oldPriceStyle}>{oldPrice}</span>
              )}
              {dealCount !== 0 && (
                <span className={newPriceStyle}>{newPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

TripCard.propTypes = {
  oldPrice: PropTypes.string,
  dealCount: PropTypes.number.isRequired,
  newPrice: PropTypes.string,
  dates: PropTypes.string,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  destinations: PropTypes.array.isRequired,
  createdAt: PropTypes.string
};

export default TripCard;
