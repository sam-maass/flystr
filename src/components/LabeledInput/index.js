import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({ onChange, value, type, name, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

LabeledInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
};

export default LabeledInput;
