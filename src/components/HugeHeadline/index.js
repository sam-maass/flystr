import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { styles } from '../../styles';

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
  color: ${styles.colors.white};
`;
const bar = css`
  height: 5px;
  width: 200px;
  margin: auto;
  background-color: ${styles.colors.orange};
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
