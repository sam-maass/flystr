import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/Login';
import ImageHeader from './components/ImageHeader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const loggedInRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect path="/home" />
  },
  {
    path: '/login',
    exact: true,
    main: () => (
      <Redirect
        to={{
          pathname: '/home'
        }}
      />
    )
  },
  {
    path: '/home',
    main: () => <Home />
  }
];

const loggedOutRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Index />
  },
  {
    path: '/login',
    exact: true,
    main: () => <Login />
  },
  {
    path: '/home',
    main: () => (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  }
];

const Layout = ({ loggedIn }) => {
  const routes = loggedIn ? loggedInRoutes : loggedOutRoutes;
  return (
    <div>
      <ImageHeader />
      <Router>
        <div className="main">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    </div>
  );
};

Layout.propTypes = {
  loggedIn: PropTypes.bool
};

const mapStateToProps = store => {
  return {
    loggedIn: !!store.user._id
  };
};
const LayoutContainer = connect(mapStateToProps)(Layout);

export default LayoutContainer;
