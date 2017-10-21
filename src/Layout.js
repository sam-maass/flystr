import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import HeaderContainer from './components/Header';
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
    main: () => <Index />
  },
  {
    path: '/',
    main: () => (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  }
];

class Layout extends Component {
  render() {
    const { loggedIn } = this.props;
    const routes = loggedIn ? loggedInRoutes : loggedOutRoutes;
    return (
      <div>
        <HeaderContainer />
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
  }
}

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
