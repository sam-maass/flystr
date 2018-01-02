import { Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/Login';
import NewTrip from './pages/NewTrip';
import React from 'react';

export const loggedInRoutes = [
  {
    path: '/',
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
    path: '/new-trip',
    exact: true,
    withHeader: true,
    main: () => <NewTrip />
  },
  {
    path: '/home',
    withHeader: true,
    main: () => <Home />
  }
];

export const loggedOutRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Index />
  },
  {
    path: '/login',
    exact: true,
    withHeader: true,
    main: () => <Login />
  },
  {
    path: '/new-trip',
    exact: true,
    withHeader: true,
    main: () => <NewTrip />
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
