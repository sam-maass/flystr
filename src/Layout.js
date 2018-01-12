import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import Reboot from 'material-ui/Reboot';
import withStyles from 'material-ui/styles/withStyles';

const Layout = ({ loggedIn, fetchUser, classes }) => {
  const jwt = window.localStorage.getItem('currentJWT');
  fetchUser(jwt);
  const routes = loggedIn ? loggedInRoutes : loggedOutRoutes;
  return (
    <Router>
      <div className={classes.main}>
        <Reboot />
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
    </Router>
  );
};

Layout.propTypes = {
  classes: PropTypes.bool,
  loggedIn: PropTypes.bool,
  fetchUser: PropTypes.func
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    loggedIn: !!store.user._id
  };
};
const LayoutContainer = connect(mapStateToProps, { fetchUser })(Layout);

const styles = {
  main: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'min-content auto'
  }
};

export default withStyles(styles)(LayoutContainer);
