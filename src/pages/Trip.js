import React from 'react';
import DealList from '../components/DealList';
import { Link } from 'react-router-dom';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button/Button';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';

const TripPage = ({ classes }) => {
  return (
    <div className={classes.pageContainer}>
      <DealList />
      <Link to="/new-deal">
        <Button fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
};

TripPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  pageContainer: {
    overflow: 'auto'
  },
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16
  }
};

export default withStyles(styles)(TripPage);
