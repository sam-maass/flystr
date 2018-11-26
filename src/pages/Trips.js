import React from 'react';
import TripList from '../components/TripList';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { createTripFromDeal } from '../actions/tripActions';
import { connect } from 'react-redux';
import qs from 'qs';

const TripsPage = ({
  classes,
  location: { search, pathname },
  createTripFromDeal
}) => {
  if (search) {
    const { copyFromDeal: dealId } = qs.parse(search, {
      ignoreQueryPrefix: true
    });
    if (dealId) {
      createTripFromDeal(dealId);
      window.history.pushState({ pathname }, null, pathname);
    }
  }

  return (
    <div className={classes.pageContainer}>
      <TripList />
      <Link to="/new-trip">
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.fab}
        >
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
};

TripsPage.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string
  }),
  createTripFromDeal: PropTypes.func
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
export default connect(
  null,
  { createTripFromDeal }
)(withStyles(styles)(TripsPage));
