import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { styles, classes } from '../../styles';

const container = withMarginTop => css`
  width: 100%;
  margin-bottom: 32px;
  ${withMarginTop && 'margin-top: 96px'};
`;

const typography = css`
  ${classes.typography.h2} text-align: center;
`;
const bar = css`
  height: 5px;
  width: 200px;
  margin: auto;
  background-color: ${styles.colors.orange};
`;

const SubHeadline = ({ children, withBar, marginTop = true }) => {
  return (
    <div className={container(marginTop)}>
      <div className={typography}>{children}</div>
      {withBar && <div className={bar} />}
    </div>
  );
};

SubHeadline.propTypes = {
  children: PropTypes.node.isRequired,
  withBar: PropTypes.bool,
  marginTop: PropTypes.bool
};

export default SubHeadline;
