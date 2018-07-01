import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const container = css`
  width: 100%;
`;

const typography = css`
  text-align: center;
  font-family: 'Comfortaa';
  font-size: 36px;
`;
const bar = css`
  height: 5px;
  width: 200px;
  margin: auto;
  background-color: #ff6d00;
`;

const SubHeadline = ({ title, withBar }) => {
  return (
    <div className={container}>
      <div className={typography}>{title}</div>
      {withBar && <div className={bar} />}
    </div>
  );
};

SubHeadline.propTypes = {
  title: PropTypes.string,
  withBar: PropTypes.bool
};

export default SubHeadline;
