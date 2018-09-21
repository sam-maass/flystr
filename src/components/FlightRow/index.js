import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { classes } from '../../styles';
import moment from 'moment';
import { IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { getLinkSource } from '../NewDealForm/parseLink';

const FlightRow = props => {
  const {
    link,
    _id,
    outDestination,
    outOrigin,
    outDate,
    inDate,
    price,
    currency = 'EUR'
  } = props.flight;
  const [outDateFormatted, inDateFormatted] = [outDate, inDate].map(date =>
    moment(date).format('DD.MM.YYYY')
  );

  return (
    <div className={style}>
      <div className="selected">
        <Checkbox
          checked={this.isSelected}
          onChange={this.onSelect}
          value={_id}
        />
      </div>
      <div className="route">
        {outOrigin}-{outDestination}
      </div>
      <div className="dates">
        {outDateFormatted} - {inDateFormatted}
      </div>
      <div className="price">
        {price} {currency}
      </div>
      <div className="link">
        <a href={link}>{getLinkSource(link)}</a>
      </div>
      <div className="actions">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

FlightRow.propTypes = {
  flight: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

const style = css`
  max-width: 800px;
  margin: auto;
  background: #eee;
  display: grid;
  gap: 8px;
  margin-top: 8px;
  align-items: center;
  grid-template-columns: 50px 1fr 2fr 1fr 1fr 50px;
  ${classes.typography.base};
`;

export default FlightRow;
