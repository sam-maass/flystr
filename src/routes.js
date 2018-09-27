import { Redirect } from 'react-router-dom';
import React from 'react';
import * as Pages from './pages/index';
import CustomAppBar from './components/CustomAppBar';

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
    path: '/new-flight',
    exact: true,
    header: () => <CustomAppBar withReturn title="Add new flights" />,
    main: () => <Pages.NewFlight />
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
    // header: () => <CustomAppBar withReturn title="Create a new trip" />,
    main: () => <Pages.NewTrip />
  },
  {
    path: '/trips',
    exact: true,
    header: () => <CustomAppBar title="Upcoming trips" />,
    main: () => <Pages.Trips />
  },

  {
    path: '/deal/:dealId/edit',
    exact: true,
    // header: () => <CustomAppBar title="Edit trip" withReturn />,
    //eslint-disable-next-line
    main: props => <Pages.NewDeal {...props.match.params} />
  },
  {
    path: '/settings',
    exact: true,
    header: () => <CustomAppBar title="Profile" />,
    main: () => <Pages.Profile />
  },
  {
    path: '/new-deal',
    exact: true,
    // header: () => <CustomAppBar withReturn title="Add a deal" />,
    main: () => <Pages.NewDeal />
  },
  {
    path: '/trip/:tripId',
    exact: true,
    // header: () => <CustomAppBar withReturn />,
    //eslint-disable-next-line
    main: props => <Pages.Trip {...props.match.params} />
  },
  {
    path: '/trip/:tripId/edit',
    exact: true,
    // header: () => <CustomAppBar withReturn title="Edit Trip" />,
    //eslint-disable-next-line
    main: props => <Pages.NewTrip {...props.match.params} />
  },
  {
    path: '/admin/all-trips',
    exact: true,
    header: () => <CustomAppBar title="All Trips" />,
    main: () => <Pages.AdminTrips />
  }
];

export const loggedOutRoutes = [
  {
    path: '/deals',
    exact: true,
    header: () => <CustomAppBar withDrawer title="Deals" />,
    main: () => <Pages.Deals />
  },
  {
    path: '/deal/:dealId',
    exact: true,
    header: () => <CustomAppBar withReturn title="Example Dates" />,
    //eslint-disable-next-line
    main: props => <Pages.Deal {...props.match.params} />
  },
  {
    path: '/',
    strict: true,
    exact: true,
    main: () => <Pages.Landing />
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
    path: '/legal',
    exact: true,
    header: () => <CustomAppBar withReturn title="Legal Information" />,
    main: () => <Pages.Legal />
  },
  {
    path: '/terms',
    exact: true,
    header: () => <CustomAppBar withReturn title="Legal Information" />,
    main: () => <Pages.Terms />
  },
  {
    path: '/:anythingElse',
    main: () => (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  }
];
