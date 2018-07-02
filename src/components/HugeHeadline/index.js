import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { styles, classes } from '../../styles';

const container = css`
  width: 100%;
`;

const typography = css`
  ${classes.typography.h1};
  text-align: center;
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
