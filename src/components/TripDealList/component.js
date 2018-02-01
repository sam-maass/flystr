import React from 'react';
import PropTypes from 'prop-types';
import TripDealRow from '../TripDealRow';
import withStyles from 'material-ui/styles/withStyles';

const TripDealList = ({ trips = [], classes }) => {
  return (
    <div className={classes.listWrapper}>
      {trips.map((item, key) => <TripDealRow key={key} {...item} />)}
    </div>
  );
};

TripDealList.propTypes = { trips: PropTypes.array, classes: PropTypes.object };

const styles = {
  listWrapper: {
    marginTop: 8,
    display: 'grid',
    gridRowGap: '8px'
  }
};

export default withStyles(styles)(TripDealList);
