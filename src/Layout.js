import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageHeader from './components/ImageHeader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { loggedInRoutes, loggedOutRoutes } from './routes';
import Reboot from 'material-ui/Reboot';

const Layout = ({ loggedIn, fetchUser }) => {
  const jwt = window.localStorage.getItem('currentJWT');
  fetchUser(jwt);
  const routes = loggedIn ? loggedInRoutes : loggedOutRoutes;
  return (
    <Router>
      <div className="main">
        <Reboot />
        <Switch>
          {routes.map((route, index) => (
            <div key={route}>
              {route.withHeader && <ImageHeader />}
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            </div>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  fetchUser: PropTypes.func
};

const mapStateToProps = store => {
  return {
    loggedIn: !!store.user._id
  };
};
const LayoutContainer = connect(mapStateToProps, { fetchUser })(Layout);

export default LayoutContainer;
