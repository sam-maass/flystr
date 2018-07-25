import React from 'react';
import Card from '@material-ui/core/Card';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const wrapperStyle = css`
  width: 100%;
  max-width: 400px;
  padding-bottom: 16px;
`;

const imgStyle = img => css`
  background-image: url(${img});
  background-size: cover;
  padding: 8px;
  [class*='MuiChip'] {
    background-color: ${styles.colors.orange};
    color: ${styles.colors.white};
    font-weight: bold;
    border-radius: 8px;
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

const DealCard = ({
  dealCount,
  oldPrice,
  newPrice,
  dates,
  duration,
  title,
  image
}) => {
  const dealString =
    dealCount === 1 ? `${dealCount} Deal` : `${dealCount} Deals`;
  return (
    <div className={wrapperStyle}>
      <Card>
        <div className={containerStyle}>
          <div className={imgStyle(image)}>
            {dealCount > 0 && <Chip label={dealString} color="primary" />}
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
                <span className={noDealStyle}>Looking for deals ...</span>
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

DealCard.propTypes = {
  oldPrice: PropTypes.string.isRequired,
  dealCount: PropTypes.number.isRequired,
  newPrice: PropTypes.string,
  dates: PropTypes.string,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default DealCard;
