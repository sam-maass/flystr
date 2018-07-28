import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import errors from './errorReducer';
import appBar from './appBar';
import allTrips from './allTrips';

export default combineReducers({
  user,
  trips,
  allTrips,
  errors,
  appBar
});
