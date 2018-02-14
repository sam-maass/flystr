import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
  pageContainer: {
    display: 'grid',
    height: '100%',
    justifyItems: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    display: 'grid',
    gridRowGap: '16px',
    justifyItems: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 55,
    height: 55,
    color: '#CCC'
  },
  text: {
    textAlign: 'center',
    color: '#BBB'
  }
};

const EmptyStateComponent = ({ classes, icon, title }) => {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.iconContainer}>
        {React.cloneElement(icon, { className: classes.icon })}
        <Typography className={classes.text} variant="headline" gutterBottom>
          {title}
        </Typography>
      </div>
    </div>
  );
};

EmptyStateComponent.propTypes = {
  classes: PropTypes.object,
  icon: PropTypes.object,
  title: PropTypes.string
};

export default withStyles(styles)(EmptyStateComponent);
