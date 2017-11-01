import { combineReducers } from 'redux';

import user from './userReducer';
import newTrip from './newTripReducer';
import trips from './tripsReducer';

export default combineReducers({
  user,
  newTrip,
  trips
});
