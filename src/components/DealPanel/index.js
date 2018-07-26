import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AirportChips from '../AirportChips';
import { css } from 'emotion';
import { classes, styles } from '../../styles';

const style = css`
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
`;
const DealRow = ({
  origins = [],
  startDate,
  endDate,
  price,
  destinations = []
}) => {
  const format = 'DD.MM.YYYY';
  const formattedStartDate = moment(startDate).format(format);
  const formattedEndDate = moment(endDate).format(format);
  return (
    <div className={style}>
      <div className="row dates">
        <div>
          <AirportChips airports={origins} />
        </div>
        <div> {formattedStartDate}</div>
      </div>
      <div className="row dates">
        <div>
          <AirportChips airports={destinations} />
        </div>
        <div> {formattedEndDate}</div>
      </div>
      <div className="row price">{price} EUR</div>
    </div>
  );
};

DealRow.propTypes = {
  status: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  price: PropTypes.number,
  destinations: PropTypes.arrayOf(PropTypes.string),
  origins: PropTypes.arrayOf(PropTypes.string),
  matchingDeals: PropTypes.array,
  link: PropTypes.string
};

export default DealRow;
