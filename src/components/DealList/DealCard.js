import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import moment from 'moment';
import { getTimeframeString } from '../../utils';
import { Link } from 'react-router-dom';
import { getDestinationImage } from '../../getDestinationImage';
import { logClick } from '../../utils/logClick';

const highlightCard = css`
  max-width: 600px;
  margin: 8px auto 8px auto;
  grid-column-start: 1;
  grid-column-end: -1;
  justify-self: center;
`;

const wrapperStyle = (destination, removed, highlighted) => css`
  width: 100%;
  max-width: 400px;
  position: relative;
  ${highlighted && highlightCard};
  border-radius: 4px;
  transition: all 0.15s;

  :hover {
    filter: brightness(1.15);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.32), 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 0 1px rgba(0, 0, 0, 0.08);
  }
  a {
    text-decoration: none;
  }
  .container {
    background-image: url(${getDestinationImage('header', destination)});
    background-size: cover;
    display: grid;
    min-height: 200px;
    ${removed ? 'filter: contrast(0.3) brightness(1.4) saturate(0.2)' : ''};
    .backdrop {
      height: 200px;
      display: grid;
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
      @media only screen and (min-width: 1024px) {
        height: ${highlighted ? '250px' : '200px'};
      }
    }
    .badge {
      ${classes.typography.base};
      font-size: 0.8em;
      margin: 8px;
      padding: 2px 12px;
      font-weight: bold;
      border-radius: 8px;
      background-color: ${styles.colors.orange};
      color: ${styles.colors.white};
      justify-self: right;
      align-self: start;
      text-align: center;
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
  .expired-overlay {
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    align-items: flex-start;
    justify-items: center;
    .expired-box {
      ${classes.typography.title};
      color: ${styles.colors.white};
      margin: 0;
      padding: 8px 16px;
      background: rgba(0, 0, 0, 0.4);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
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
    lastChecked = moment().subtract(3, 'days'),
    priceLimit,
    removed
  } = props.deal;
  const currency = '€';
  const { highlighted } = props;
  const daysAgo = moment(lastChecked).fromNow();
  const roundedPriceLimit = Math.round(priceLimit / 10) * 10;
  const showSavingBadge = minPrice < roundedPriceLimit;
  const timeFrame = getTimeframeString({
    startDate: firstDeparture,
    endDate: lastReturn
  });
  const renderInnerCard = () => {
    return (
      <Card>
        <div className="container">
          <div className="backdrop">
            <span className="badge">
              {showSavingBadge && (
                <>
                  <small>
                    <s>
                      {currency}
                      {roundedPriceLimit}
                    </s>
                  </small>
                  <br />
                </>
              )}
              {currency}
              {minPrice}
            </span>
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
                updated <br />
                <strong>{daysAgo}</strong>
              </span>
            </div>
          </div>
        </div>
        {removed && (
          <div className="expired-overlay">
            <span className="expired-box">Deal Expired</span>
          </div>
        )}
      </Card>
    );
  };
  return (
    <div className={wrapperStyle(destinations[0], removed, highlighted)}>
      {removed && renderInnerCard()}
      {!removed && (
        <Link
          to={`/deal/${slug || _id}`}
          onClick={logClick(`/deal/${slug || _id}`, {
            category: 'Deals | Deal Card'
          })}
        >
          {renderInnerCard()}
        </Link>
      )}
    </div>
  );
};

DealCard.propTypes = {
  deal: PropTypes.object,
  highlighted: PropTypes.bool
};

export default DealCard;
