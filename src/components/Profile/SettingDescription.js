import React from 'react';
import PropTypes from 'prop-types';

export function SettingDescription({ primary, secondary }) {
  return (
    <div>
      <b>{primary}:</b>
      <br />
      <small>{secondary}</small>
    </div>
  );
}

SettingDescription.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string
};
