import React from 'react';
import TripList from '../../components/TripList';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const TripsPage = ({ classes }) => {
  return (
    <div className={classes.pageContainer}>
      <TripList />
      <Link to="/new-trip">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

TripsPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  pageContainer: {
    marginRight: 8,
    height: '100%',
    marginLeft: 8
  },
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16
  }
};
export default withStyles(styles)(TripsPage);
