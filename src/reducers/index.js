import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import errors from './errorReducer';

export default combineReducers({
  user,
  trips,
  errors
});
