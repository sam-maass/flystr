import React from 'react';
import PropTypes from 'prop-types';
export function AdvantageBox(opts) {
  const { heading = 'Heading', children } = opts;
  return (
    <div>
      <h3 className="h3-text">{heading}</h3>
      <p className="base-text">{children}</p>
    </div>
  );
}

AdvantageBox.propTypes = {
  heading: PropTypes.string
};
