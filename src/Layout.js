import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { deleteError } from './actions/errorActions';
import Snackbar from '@material-ui/core/Snackbar';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({
  loggedIn,
  ready,
  fetchUser,
  classes,
  error,
  deleteError
}) => {
  const routes = loggedIn ? loggedInRoutes : loggedOutRoutes;
  if (!ready) {
    fetchUser();
    return null;
  } else {
    return (
      <Router>
        <div className={classes.main}>
          <CssBaseline />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.header || null}
              />
            ))}
          </Switch>
          <Switch>
            <div className={classes.scrollContainer}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </Switch>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={Boolean(error)}
            autoHideDuration={4000}
            onClose={deleteError}
            SnackbarContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{error}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={deleteError}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      </Router>
    );
  }
};

Layout.propTypes = {
  classes: PropTypes.object,
  loggedIn: PropTypes.bool,
  ready: PropTypes.bool,
  fetchUser: PropTypes.func,
  deleteError: PropTypes.func,
  error: PropTypes.string
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    loggedIn: Boolean(store.user._id),
    ready: store.user.ready,
    error: store.errors[0] && store.errors[0].error
  };
};
const LayoutContainer = connect(
  mapStateToProps,
  { fetchUser, deleteError }
)(Layout);

const styles = {
  main: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'min-content auto'
  },
  scrollContainer: {
    overflowX: 'none',
    overflowY: 'auto'
  }
};

export default withStyles(styles)(LayoutContainer);
