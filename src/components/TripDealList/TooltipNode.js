import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'emotion';

export const TooltipNode = ({ title: { city, iata, country, name } }) => {
  return (
    <span className={style}>
      <b>
        {name} ({iata})
      </b>
      <br /> {city}, {country}
    </span>
  );
};

const style = css`
  line-height: 1.4;
  font-size: 1.8em;
`;

TooltipNode.propTypes = {
  title: PropTypes.object
};
