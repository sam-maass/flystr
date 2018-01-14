import { Redirect } from 'react-router-dom';
import Destinations from './pages/Destinations';
import Flights from './pages/Flights';
import Profile from './pages/Profile';
import NewDeal from './pages/NewDeal';
import Deals from './pages/Deals';
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
          pathname: '/flights'
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
          pathname: '/flights'
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
    path: '/flights',
    header: () => <CustomAppBar title="Matching Flights" />,
    main: () => <Flights />
  },
  {
    path: '/destinations',
    header: () => <CustomAppBar title="Destinations" />,
    main: () => <Destinations />
  },
  {
    path: '/profile',
    header: () => <CustomAppBar title="Profile" />,
    main: () => <Profile />
  },
  {
    path: '/new-deal',
    header: () => <CustomAppBar title="Add a deal" />,
    main: () => <NewDeal />
  },
  {
    path: '/deals',
    header: () => <CustomAppBar title="Deals" />,
    main: () => <Deals />
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
