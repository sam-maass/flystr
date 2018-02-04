import React from 'react';
import PropTypes from 'prop-types';
import DealPanel from '../DealPanel';
import withStyles from 'material-ui/styles/withStyles';

const TripList = ({ trips = [], classes }) => {
  return (
    <div className={classes.listWrapper}>
      {trips.map((item, key) => <DealPanel elevation={0} key={key} {...item} />)}
    </div>
  );
};

TripList.propTypes = { trips: PropTypes.array, classes: PropTypes.object };

const styles = {
  listWrapper: {
    marginTop: 8,
    display: 'grid',
  }
};

export default withStyles(styles)(TripList);
