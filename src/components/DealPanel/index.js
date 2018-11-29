import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import { logClick } from '../../utils/logClick';
import AirplaneIcon from '@material-ui/icons/FlightTakeoffRounded';
import OtaMenu from './OtaMenu';

const style = css`
  ${classes.typography.base}
  color:${styles.colors.midGray};
  display: grid;
  grid-template-columns: 1fr 140px;
  background-color: #fff;
  margin-bottom:8px;
  .head {
    grid-column: span 2;
    display: grid;
    align-items:center;
    grid-gap: 8px;
    padding: 8px;
    grid-template-columns: 24px 1fr 24px;
    border-bottom: 1px solid #ddd;

  }
  .details{
    padding:8px;    
    .direct{
      font-weight:bold;
      color: ${styles.colors.green3}
    }
  }
  .cta-area{
    padding:8px;
    display:grid;
    justify-items:center;
  .button{
    background-color:#fff;
    color: ${styles.colors.green3};
    border: 1px solid ${styles.colors.green3};
    border-radius: 4px;
    padding:7px 16px;
    font-weight:bold;
    transition: all 0.32s;
    :hover{
      background-color:#cee7e3
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
  updatedAt,
  direct,
  carrier,
  outOrigin,
  outDestination
}) => {
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
    <div className={style}>
      <div className="head">
        <AirplaneIcon />
        <span>
          {formattedStartDate} - {formattedEndDate}
        </span>
        <OtaMenu
          flight={{ outOrigin, outDestination, outDate, inDate, link }}
        />
      </div>
      <div className="details">
        <div className="airline">
          <b>{carrier}</b>{' '}
          {direct && (
            <span>
              | <span className="direct">direct</span>
            </span>
          )}
        </div>
        <div className="days">
          {startDay} - {endDay}
        </div>
        <div className="last-seen">
          <small>found {lastSeen}</small>
        </div>
      </div>
      <div className="cta-area">
        <div className="days">
          <small>{duration} day trip</small>
        </div>
        <a href={link} onClick={logClick(link, { category: 'Deal | Flight' })}>
          <div className="button">
            {price} {currency}
          </div>
        </a>
      </div>
    </div>
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
  updatedAt: PropTypes.string,
  direct: PropTypes.bool,
  carrier: PropTypes.string
};

export default DealRow;
