import React from 'react';
import TripList from '../components/TripList';
import { Link } from 'react-router-dom';

const UserHome = () => {
  return (
    <div>
      <h1>Welcome back, user</h1>
      <TripList />
      <Link to="/new-trip"> Add another trip </Link>
    </div>
  );
};

export default UserHome;
