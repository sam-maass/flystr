import { setJWT, refreshTimer } from './jwtHelper';
import { UPDATE_USER_SETTINGS } from '../actions/userActions';

export default function reducer(state = { ready: false }, action) {
  switch (action.type) {
    case `${UPDATE_USER_SETTINGS}_FULFILLED`:
      return { ...state, ...action.payload.data };
    case 'FETCH_USER_PENDING':
      return { ...state, fetching: true };
    case 'FETCH_USER_REJECTED':
      return {
        loggedIn: false,
        fetchFailed: true,
        ready: true,
        fetching: false,
        error: action.payload
      };
    case 'FETCH_USER_FULFILLED':
      setJWT(action.payload.data.user.activeJWT);
      return {
        ...state,
        ready: true,
        fetching: false,
        fetched: true,
        ...action.payload.data.user
      };
    case 'LOGIN_USER_FULFILLED':
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case 'SIGNUP_USER_FULFILLED':
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case 'SIGNUP_WITH_EMAIL_FULFILLED':
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case 'LOGIN_WITH_EMAIL_FULFILLED':
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data, ready: true };
    case 'REFRESH_USER_TOKEN_FULFILLED':
      setJWT(action.payload.data.activeJWT);
      return { ...state, ...action.payload.data };
    case 'LOGOUT_USER_FULFILLED':
      window.localStorage.removeItem('currentJWT');
      if (refreshTimer) clearTimeout(refreshTimer);
      return { ready: true };
    default:
      return state;
  }
}
