import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';

export default combineReducers({
  user,
  trips
});
