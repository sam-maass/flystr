import React from 'react';
import DealList from '../components/DealList';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';

const FlightsPage = ({ classes }) => {
  return (
    <div className={classes.pageContainer}>
      <DealList allUserDeals />
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
