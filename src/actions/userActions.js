import { api } from '../settings';

export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: api.get(`/user/profile`)
  };
}
export function signupUser() {
  return {
    type: 'SIGNUP_USER',
    payload: api.post(`/user/signup`)
  };
}
export function loginUser() {
  return {
    type: 'LOGIN_USER',
    payload: api.post(`/user/login`)
  };
}
export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
    payload: api.post(`/user/logout`)
  };
}
