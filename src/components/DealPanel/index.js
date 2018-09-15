import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import TakeoffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import LandingIcon from '@material-ui/icons/Undo';
import { getLinkSource } from '../NewDealForm/parseLink';
const style = css`
  text-decoration: none;
  .container {
    background-color: #fff;
    ${classes.typography.base};
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 8px;
    .row {
      padding: 8px;
      display: grid;
      justify-self:baseline;
    }
    .dates {
      color: ${styles.colors.midGray};
      font-size: 14px;
      display: grid;
      grid-template-columns: repeat(4,auto);
      align-items: center;
      gap: 16px;
      margin: 2px;
      justify-self: baseline;
}
    }
    .price {
      color: ${styles.colors.orange};
      text-align: center;
      background: rgba(255, 109, 0, 0.1);
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      .link {
        color: ${styles.colors.lightGray};
        font-size: 0.8em;
      }
    }
  }
`;
const DealRow = ({
  outOrigin,
  outOriginDetails,
  inOrigin,
  inOriginDetails,
  outDate,
  inDate,
  price,
  link
}) => {
  const linkSource = getLinkSource(link);
  const format = 'DD.MM.YYYY';
  const formattedStartDate = moment(outDate).format(format);
  const formattedEndDate = moment(inDate).format(format);
  return (
    <a className={style} href={link} target="_blank" rel="noopener noreferrer">
      <div className="container">
        <div className="row">
          <div className="dates">
            <TakeoffIcon />
            <b>{formattedStartDate}</b>
            {!outOriginDetails && <span>{outOrigin}</span>}
            {outOriginDetails && <span>{outOriginDetails.city}</span>}
          </div>
          <div className="dates">
            <LandingIcon />
            <b>{formattedEndDate}</b>
            {!inOriginDetails && <span>{inOrigin}</span>}
            {inOriginDetails && <span>{inOriginDetails.city}</span>}
          </div>
        </div>
        <div className="row price">
          {price} EUR <br />
          {linkSource && <span className="link">{linkSource}</span>}
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
  price: PropTypes.string,
  link: PropTypes.string,
  linkSource: PropTypes.string
};

export default DealRow;
