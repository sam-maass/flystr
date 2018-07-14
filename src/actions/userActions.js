import { api } from '../settings';

export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: api().get(`/user/profile`)
  };
}
export function signupUser() {
  return {
    type: 'SIGNUP_USER',
    payload: api().post(`/user/signup`)
  };
}
export function signupWithEmail({ email, password }) {
  return {
    type: 'SIGNUP_WITH_EMAIL',
    payload: api().post(`/user/signup-email`, { email, password })
  };
}
export function loginUser() {
  return {
    type: 'LOGIN_USER',
    payload: api().post(`/user/login`)
  };
}
export function loginWithEmail({ email, password }) {
  return {
    type: 'LOGIN_WITH_EMAIL',
    payload: api().post(`/user/login-email`, { email, password })
  };
}
export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
    payload: api().post(`/user/logout`)
  };
}
