import { combineReducers } from 'redux';

import user from './userReducer';
import newTrip from './newTripReducers';

export default combineReducers({
  user,
  newTrip
});
