import React from 'react';
import TripDealList from '../components/TripDealList/';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';

const FlightsPage = ({ classes }) => {
  return (
    <div className={classes.pageContainer}>
      <TripDealList allUserDeals />
    </div>
  );
};

FlightsPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  pageContainer: {
    marginRight: 8,
    marginLeft: 8
  }
};

export default withStyles(styles)(FlightsPage);
