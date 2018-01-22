import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import deals from './dealReducer';
import errors from './errorReducer';

export default combineReducers({
  user,
  trips,
  deals,
  errors
});
