import { Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/Login';
import NewTrip from './pages/NewTrip';
import React from 'react';
import { CustomAppBar } from './components/CustomAppBar';

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
    header: () => <CustomAppBar title="Create a new trip" />,
    main: () => <NewTrip />
  },
  {
    path: '/home',
    header: () => <CustomAppBar title="Your Flights" />,
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
    header: () => <CustomAppBar title="Login" />,
    main: () => <Login />
  },
  {
    path: '/new-trip',
    exact: true,
    header: () => <CustomAppBar title="Create a new trip" />,
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
