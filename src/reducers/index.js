import { combineReducers } from '../../../../.cache/typescript/2.9/node_modules/redux';

import user from './userReducer';
import trips from './tripsReducer';
import errors from './errorReducer';
import appBar from './appBar';
import allTrips from './allTrips';
import deals from './dealReducer';

export default combineReducers({
  deals,
  user,
  trips,
  allTrips,
  errors,
  appBar
});
