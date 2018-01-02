import { Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/Login';
import NewTrip from './pages/NewTrip';
import React from 'react';
import ImageHeader from './components/ImageHeader';

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
    header: () => <ImageHeader />,
    main: () => <NewTrip />
  },
  {
    path: '/home',
    header: () => <ImageHeader />,
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
    header: () => <ImageHeader />,
    main: () => <Login />
  },
  {
    path: '/new-trip',
    exact: true,
    header: () => <ImageHeader />,
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
