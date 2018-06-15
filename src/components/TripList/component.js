import React from 'react';
import PropTypes from 'prop-types';
import TripRow from '../TripRow';
import { withStyles } from '@material-ui/core/styles';

const TripList = ({ trips = [], classes }) => {
  return (
    <div className={classes.listWrapper}>
      {trips.map((item, key) => <TripRow key={key} {...item} />)}
    </div>
  );
};

TripList.propTypes = { trips: PropTypes.array, classes: PropTypes.object };

const styles = {
  listWrapper: {
    marginTop: 8,
    display: 'grid',
    gridRowGap: '8px'
  }
};

export default withStyles(styles)(TripList);
