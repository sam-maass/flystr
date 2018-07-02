import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../../styles';

const FlowText = props => (
  <div className={classes.typography.base}>{props.children}</div>
);
FlowText.propTypes = {
  children: PropTypes.node.isRequired
};

export default FlowText;
