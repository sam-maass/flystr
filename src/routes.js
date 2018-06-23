import { Redirect } from 'react-router-dom';
import React from 'react';
import { CustomAppBar } from './components/CustomAppBar';
import * as Pages from './pages/index';

export const loggedInRoutes = [
  {
    path: '/',
    exact: true,
    main: () => (
      <Redirect
        to={{
          pathname: '/trips'
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
          pathname: '/trips'
        }}
      />
    )
  },
  {
    path: '/signup',
    exact: true,
    main: () => (
      <Redirect
        to={{
          pathname: '/trips'
        }}
      />
    )
  },
  {
    path: '/new-trip',
    exact: true,
    header: () => <CustomAppBar withReturn title="Create a new trip" />,
    main: () => <Pages.NewTrip />
  },
  {
    path: '/trips',
    header: () => <CustomAppBar title="My trips" />,
    main: () => <Pages.Trips />
  },
  {
    path: '/settings',
    header: () => <CustomAppBar title="Profile" />,
    main: () => <Pages.Profile />
  },
  {
    path: '/new-deal',
    header: () => <CustomAppBar withReturn title="Add a deal" />,
    main: () => <Pages.NewDeal />
  },
  {
    path: '/trip/:tripId',
    exact: true,
    header: () => <CustomAppBar withReturn title="Trip" />,
    //eslint-disable-next-line
    main: props => <Pages.Trip {...props.match.params} />
  },
  {
    path: '/trip/:tripId/edit',
    header: () => <CustomAppBar withReturn title="Edit Trip" />,
    //eslint-disable-next-line
    main: props => <Pages.NewTrip {...props.match.params} />
  }
];

export const loggedOutRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Pages.Home />
  },
  {
    path: '/login',
    exact: true,
    header: () => <CustomAppBar withDrawer={false} title="Login" />,
    main: () => <Pages.Login />
  },
  {
    path: '/signup',
    exact: true,
    header: () => <CustomAppBar withDrawer={false} title="Sign up" />,
    main: () => <Pages.Signup />
  },
  {
    path: '/impressum',
    exact: true,
    main: () => <Pages.Impressum />
  }
];
