import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { classes } from '../../styles';
import moment from 'moment';
import { IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { getLinkSource } from '../NewDealForm/parseLink';

class FlightRow extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      link,
      createdAt,
      _id,
      outDestination,
      outOrigin,
      outDate,
      inDate,
      price,
      currency = 'EUR'
    } = this.props.flight;
    const [
      outDateFormatted,
      inDateFormatted,
      createdAtFormatted
    ] = this.formatDates(outDate, inDate, createdAt);

    return (
      <div className={style}>
        <div className="selected">
          <Checkbox
            checked={this.isSelected}
            onChange={this.props.onSelect}
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
          <br />
          <small title="created">C: {createdAtFormatted}</small>
        </div>
        <div className="actions">
          <IconButton onClick={this.props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }

  formatDates(...dates) {
    return dates.map(date => moment(date).format('DD.MM.YYYY'));
  }
}

FlightRow.propTypes = {
  flight: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func
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
