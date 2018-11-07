import { api } from '../settings';

export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: api().get(`/user/profile`)
  };
}

export function fetchNotifications() {
  return {
    type: 'FETCH_USER_NOTIFICATIONS',
    payload: api().get(`/user/notifications`)
  };
}
export function markNotificationsAsSeen() {
  return {
    type: 'MARK_USER_NOTIFICATIONS_READ',
    payload: api().put(`/user/notifications/seen`)
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
export function refreshToken() {
  return {
    type: 'REFRESH_USER_TOKEN',
    payload: api().get(`/user/refreshToken`)
  };
}
