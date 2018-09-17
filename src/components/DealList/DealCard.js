import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import moment from 'moment';
import { getTimeframeString } from '../../utils';
import { Link } from 'react-router-dom';
import { getDestinationImage } from '../../getDestinationImage';

const wrapperStyle = destination => css`
  width: 100%;
  max-width: 400px;
  a {
    text-decoration: none;
  }
  .container {
    background-image: url(${getDestinationImage('header', destination)});
    background-size: cover;
    display: grid;
    min-height: 200px;
    .backdrop {
      height: 200px;
      display: grid;
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
    }
    .badge {
      ${classes.typography.base};
      font-size: 0.8em;
      margin: 8px;
      padding: 2px 6px;
      font-weight: bold;
      border-radius: 8px;
      background-color: ${styles.colors.orange};
      color: ${styles.colors.white};
      justify-self: right;
      align-self: start;
    }
    .main {
      margin-bottom: 8px;
      justify-self: center;
      align-self: center;
      text-align: center;
      .title {
        ${classes.typography.h2};
        color: ${styles.colors.white};
        line-height: 1px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .subtitle {
        ${classes.typography.base};

        color: ${styles.colors.white};
      }
    }
  }

  .bottomLayover {
    ${classes.typography.base};
    color: ${styles.colors.white};
    font-size: 0.8em;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 8px;
    span {
      align-self: end;
      text-align: center;
    }
  }
`;

const DealCard = props => {
  const {
    _id,
    slug,
    title,
    subtitle,
    minPrice,
    lastReturn,
    destinations,
    firstDeparture,
    createdAt
  } = props.deal;
  const daysAgo = moment(createdAt).fromNow();
  const timeFrame = getTimeframeString({
    startDate: firstDeparture,
    endDate: lastReturn
  });
  return (
    <div className={wrapperStyle(destinations[0])}>
      <Link to={`/deal/${slug || _id}`}>
        <Card>
          <div className="container">
            <div className="backdrop">
              <span className="badge">from {minPrice} EUR </span>
              <div className="main">
                <span className="title">{title}</span>
                <br />
                <span className="subtitle">from {subtitle}</span>
              </div>
              <div className="bottomLayover">
                <span className="availability">
                  Availability <br />
                  <strong>{timeFrame}</strong>
                </span>
                <span className="age">
                  posted <br />
                  <strong>{daysAgo}</strong>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

DealCard.propTypes = {
  deal: PropTypes.object
};

export default DealCard;
