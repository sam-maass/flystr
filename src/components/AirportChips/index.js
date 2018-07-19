import React from 'react';
import PropTypes from 'prop-types';
import hash from 'string-hash';
import Chip from '@material-ui/core/Chip';
import {
  cyan,
  teal,
  green,
  lightgreen,
  indigo,
  blue,
  lightblue,
  lime
} from '../../colors.js';

const getColor = term => {
  const bgColors = [
    cyan.a100,
    teal.a100,
    green.a100,
    lightgreen.a100,
    indigo.a100,
    blue.a100,
    lightblue.a100,
    lime.a100,
    cyan.a200,
    teal.a200,
    green.a200,
    lightgreen.a200,
    indigo.a200,
    blue.a200,
    lightblue.a200,
    lime.a200
  ];
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
