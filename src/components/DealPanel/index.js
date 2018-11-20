import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import { getLinkSource } from '../NewDealForm/parseLink';
import { logClick } from '../../utils/logClick';

const style = css`
  text-decoration: none;
  .container {
    background-color: #fff;
    ${classes.typography.base};
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom:8px;
    transition: all 0.15s;
    :hover{
      background-color:#fcfcfc;
      .price{
        background-color:#ffece3;
      }
    }
    .row {
      padding: 8px;
      display: grid;
      justify-self:baseline;
    }
    .dates {
      color: ${styles.colors.midGray};
      font-size: 14px;
      display: grid;
      align-items: center;
      justify-self: baseline;
      line-height:1.35;
      b{
        padding:8px 0;
        line-height:1em
      }
    }
    }
    .price {
      color: ${styles.colors.orange};
      text-align: center;
      background: #fff0e9;
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      .link {
        font-weight:normal;
        color: ${styles.colors.lightGray};
        font-size: 0.7em;
        line-height:1.35
      }
    }
  }
`;
const DealRow = ({
  outDate,
  inDate,
  price,
  link,
  currency = 'EUR',
  updatedAt
}) => {
  const linkSource = getLinkSource(link);
  const format = 'DD MMM YYYY';
  const formatWithoutYear = 'DD MMM';
  const formatOnlyDay = 'DD';
  const isSameMonth = moment(outDate).isSame(inDate, 'month');
  const isSameYear = moment(outDate).isSame(inDate, 'year');
  let startFormat = format;
  if (isSameYear) startFormat = formatWithoutYear;
  if (isSameYear && isSameMonth) startFormat = formatOnlyDay;
  const formattedStartDate = moment(outDate).format(startFormat);
  const formattedEndDate = moment(inDate).format(format);
  const startDay = moment(outDate).format('ddd');
  const endDay = moment(inDate).format('ddd');
  const duration = moment(inDate).diff(outDate, 'days');
  const lastSeen = moment(updatedAt).fromNow();
  return (
    <a
      className={style}
      href={link}
      onClick={logClick(link, { category: 'Deal | Flight' })}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="container">
        <div className="row">
          <div className="dates">
            <b>
              {formattedStartDate} - {formattedEndDate}
            </b>
            {duration} days <br />
            {startDay}-{endDay}
          </div>
        </div>
        <div className="row price">
          {price} {currency} <br />
          {linkSource && (
            <span className="link">
              {lastSeen} <br />
              on {linkSource}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

DealRow.propTypes = {
  outOrigin: PropTypes.string,
  outOriginDetails: PropTypes.object,
  inOriginDetails: PropTypes.object,
  inOrigin: PropTypes.string,
  outDestination: PropTypes.string,
  inDestination: PropTypes.string,
  outDate: PropTypes.string,
  inDate: PropTypes.string,
  price: PropTypes.number,
  link: PropTypes.string,
  linkSource: PropTypes.string,
  currency: PropTypes.string,
  updatedAt: PropTypes.string
};

export default DealRow;
