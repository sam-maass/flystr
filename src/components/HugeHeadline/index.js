import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const container = css`
  width: 100%;
`;

const typography = css`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: bold;
  line-height: 50px;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #fafafa;
`;
const bar = css`
  height: 5px;
  width: 200px;
  margin: auto;
  background-color: #ff6d00;
`;

const HugeHeadline = ({ children, withBar }) => {
  return (
    <div className={container}>
      <div className={typography}>{children}</div>
      {withBar && <div className={bar} />}
    </div>
  );
};

HugeHeadline.propTypes = {
  children: PropTypes.node,
  withBar: PropTypes.bool
};

export default HugeHeadline;
