import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import errors from './errorReducer';
import appBar from './appBar';
import allTrips from './allTrips';
import deals from './dealReducer';
import currentDeal from './currentDealReducer';
import routing from './routingReducer';

export default combineReducers({
  currentDeal,
  deals,
  user,
  trips,
  allTrips,
  errors,
  appBar,
  routing
});
