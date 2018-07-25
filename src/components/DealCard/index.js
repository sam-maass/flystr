import React from 'react';
import Card from '@material-ui/core/Card';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import PropTypes from 'prop-types';

const wrapperStyle = css`
  width: 100%;
  max-width: 400px;
  padding-bottom: 16px;
`;

const imgStyle = img => css`
  background-image: url(${img});
  background-size: cover;
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

const DealCard = ({ oldPrice, newPrice, dates, duration, title, image }) => {
  return (
    <div className={wrapperStyle}>
      <Card>
        <div className={containerStyle}>
          <div className={imgStyle(image)} />
          <div className="content">
            <div className={titleStyle}>{title}</div>
            <div className={classes.typography.base}>
              {dates}
              <br />
              {duration}
            </div>
            <div className={classes.typography.base}>
              <span className={oldPriceStyle}>{oldPrice}</span>
              <span className={newPriceStyle}>{newPrice}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

DealCard.propTypes = {
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default DealCard;
