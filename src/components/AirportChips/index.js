import React from 'react';
import PropTypes from 'prop-types';
import hash from 'string-hash';
import Chip from '@material-ui/core/Chip';
import colors from '../../colors.js';

const getColor = term => {
  const {
    cyan,
    teal,
    green,
    lightgreen,
    indigo,
    blue,
    lightblue,
    lime
  } = colors;
  const bgColors = [
    cyan.a100,
    teal.a100,
    green.a100,
    lightgreen.a100,
    indigo.a100,
    blue.a100,
    lightblue.a100,
    lime.a100
  ];
  const bghash = hash(term) % bgColors.length;
  return bgColors[bghash];
};

const AirportChips = ({ airports, styleClass, onDelete }) => {
  return airports.map(airport => (
    <Chip
      style={{
        backgroundColor: getColor(airport),
        margin: '4px',
        fontWeight: 'bold',
        minWidth: '60px'
      }}
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
