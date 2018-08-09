import React from 'react';
import Card from '@material-ui/core/Card';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';
import { getDestinationImage } from '../../getDestinationImage';

const wrapperStyle = css`
  width: 100%;
  max-width: 400px;
`;

const imgStyle = code => css`
  background-image: url(${getDestinationImage('square', code)}),
    url(${getDestinationImage('square', code, { fallback: true })});
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
    &.active {
      background-color: ${styles.colors.green3};
      color: ${styles.colors.white};
    }
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
  destinations
}) => {
  const dealString =
    dealCount === 1 ? `${dealCount} Deal` : `${dealCount} Deals`;
  return (
    <div className={wrapperStyle}>
      <Card>
        <div className={containerStyle}>
          <div className={imgStyle(destinations[0])}>
            {dealCount > 0 && <span className="badge deal">{dealString}</span>}
            {dealCount === 0 && <span className="badge active">active</span>}
          </div>
          <div className="content">
            <div className={titleStyle}>{title} </div>
            <div className={classes.typography.base}>
              {dates}
              <br />
              {duration}
            </div>
            <div className={classes.typography.base}>
              {dealCount === 0 && (
                <span className={noDealStyle}>Looking for next deal</span>
              )}
              {oldPrice && <span className={oldPriceStyle}>{oldPrice}</span>}
              {newPrice && <span className={newPriceStyle}>{newPrice}</span>}
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
  destinations: PropTypes.array.isRequired
};

export default TripCard;
