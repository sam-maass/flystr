import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AirportChips from '../AirportChips';
import { css } from 'emotion';
import { classes, styles } from '../../styles';

const style = css`
  text-decoration: none;
  .container {
    background-color: #fff;
    ${classes.typography.base};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin-bottom: 8px;
    .row {
      padding: 8px;
      display: grid;
      align-items: center;
      justify-items: center;
    }
    .dates {
      color: ${styles.colors.midGray};
      font-size: 14px;
    }
    .price {
      color: ${styles.colors.orange};
      background: rgba(255, 109, 0, 0.1);
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
    }
  }
`;
const DealRow = ({
  outOrigin,
  outDestination,
  outDate,
  inDate,
  price,
  link
}) => {
  const format = 'DD.MM.YYYY';
  const formattedStartDate = moment(outDate).format(format);
  const formattedEndDate = moment(inDate).format(format);
  return (
    <a className={style} href={link} target="_blank" rel="noopener noreferrer">
      <div className="container">
        <div className="row dates">
          <div>
            <AirportChips airports={[outOrigin]} />
          </div>
          <div> {formattedStartDate}</div>
        </div>
        <div className="row dates">
          <div>
            <AirportChips airports={[outDestination]} />
          </div>
          <div> {formattedEndDate}</div>
        </div>
        <div className="row price">{price} EUR</div>
      </div>
    </a>
  );
};

DealRow.propTypes = {
  outOrigin: PropTypes.string,
  outDestination: PropTypes.string,
  outDate: PropTypes.string,
  inDate: PropTypes.string,
  price: PropTypes.string,
  link: PropTypes.string
};

export default DealRow;
