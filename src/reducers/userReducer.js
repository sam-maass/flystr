import { setJWT, refreshTimer } from './jwtHelper';
import {
  FETCH_USER,
  SIGNUP_WITH_EMAIL,
  LOGIN_USER,
  SIGNUP_USER,
  UPDATE_USER_SETTINGS,
  LOGIN_WITH_EMAIL,
  LOGOUT_USER,
  REFRESH_USER_TOKEN
} from '../actions/userActions';

export default function reducer(state = { ready: false }, action) {
  switch (action.type) {
    case `${UPDATE_USER_SETTINGS}_FULFILLED`:
      return { ...state, ...action.payload.data };
    case `${FETCH_USER}_PENDING`:
      return { ...state, fetching: true };
    case `${FETCH_USER}_REJECTED`:
      return {
        loggedIn: false,
        fetchFailed: true,
        ready: true,
        fetching: false,
        error: action.payload
      };
    case `${FETCH_USER}_FULFILLED`:
      setJWT(action.payload.data.user.activeJWT);
      return {
        ...state,
        ready: true,
        fetching: false,
        fetched: true,
        ...action.payload.data.user
      };
    case `${LOGIN_USER}_FULFILLED`:
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case `${SIGNUP_USER}_FULFILLED`:
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case `${SIGNUP_WITH_EMAIL}_FULFILLED`:
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case `${LOGIN_WITH_EMAIL}_FULFILLED`:
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case `${REFRESH_USER_TOKEN}_FULFILLED`:
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data };
    case `${LOGOUT_USER}_FULFILLED`:
      window.localStorage.removeItem('currentJWT');
      if (refreshTimer) clearTimeout(refreshTimer);
      return { ready: true };
    default:
      return state;
  }
}
