import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import { withRouter } from 'react-router';
import { updateRoute } from './actions/routingActions';
import { isBrowser } from './settings';

class Layout extends React.Component {
  componentDidMount() {
    this.props.updateRoute({ route: this.props.location.pathname });
    this.props.fetchUser();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname }
    } = this.props;
    if (pathname !== prevProps.location.pathname) {
      this.props.updateRoute({ route: pathname });
    }
  }

  render() {
    const { loggedIn, classes, error, deleteError, ready } = this.props;
    if (isBrowser() && !ready) return null;
    const routes = loggedIn
      ? [...loggedInRoutes, ...loggedOutRoutes]
      : loggedOutRoutes;
    return (
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
        <div className={classes.scrollContainer}>
          <Switch>
            {/* <Route path="/" exact component={() => <Landing />} /> */}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </div>
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
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
  loggedIn: PropTypes.bool,
  ready: PropTypes.bool,
  fetchUser: PropTypes.func,
  deleteError: PropTypes.func,
  updateRoute: PropTypes.func,
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
const LayoutContainer = withRouter(
  connect(
    mapStateToProps,
    { fetchUser, deleteError, updateRoute }
  )(Layout)
);

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
