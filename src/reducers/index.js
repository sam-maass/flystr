import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import deals from './dealReducer';

export default combineReducers({
  user,
  trips,
  deals
});
