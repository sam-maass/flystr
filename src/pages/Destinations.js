import React from 'react';
import TripList from '../components/TripList';
import { Link } from 'react-router-dom';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button/Button';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';

const DestinationsPage = ({ classes }) => {
  return (
    <div>
      <TripList />
      <Link to="/new-trip">
        <Button fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
};

DestinationsPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16
  }
};

export default withStyles(styles)(DestinationsPage);
