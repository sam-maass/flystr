import React from 'react';
import PropTypes from 'prop-types';
import hash from 'string-hash';
import Chip from '@material-ui/core/Chip';
import colors from '@material-ui/core/colors';

const getColor = term => {
  const bgColors = [
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'indigo',
    'blue',
    'lightBlue',
    'lime'
  ].map(name => colors[name].A200);
  const bghash = hash(term) % bgColors.length;
  return bgColors[bghash];
};

const AirportChips = ({ airports, styleClass, onDelete }) => {
  return airports.map(airport => (
    <Chip
      style={{ backgroundColor: getColor(airport) }}
      className={styleClass}
      tabIndex="-1"
      key={airport}
      label={airport}
      onDelete={onDelete ? () => onDelete(airport) : undefined}
    />
  ));
};

AirportChips.propTypes = {
  airports: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onDelete: PropTypes.func
};

export default AirportChips;
