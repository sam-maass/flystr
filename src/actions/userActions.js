import { api } from '../settings';
export const LOGIN_WITH_EMAIL = 'LOGIN_WITH_EMAIL';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REFRESH_USER_TOKEN = 'REFRESH_USER_TOKEN';
export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_NOTIFICATIONS = 'FETCH_USER_NOTIFICATIONS';
export const MARK_USER_NOTIFICATIONS_READ = 'MARK_USER_NOTIFICATIONS_READ';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_WITH_EMAIL = 'SIGNUP_WITH_EMAIL';
export const PURCHASE_SUBSCRIPTION = 'PURCHASE_SUBSCRIPTION';

export function purchaseSubscription(opts) {
  return {
    type: PURCHASE_SUBSCRIPTION,
    payload: api().post(`/user/premiumSignup`, opts)
  };
}
export function updateUserSettings(userSettings) {
  return {
    type: UPDATE_USER_SETTINGS,
    payload: api().put(`/user`, userSettings)
  };
}

export function fetchUser() {
  return {
    type: FETCH_USER,
    payload: api().get(`/user/profile`)
  };
}

export function fetchNotifications() {
  return {
    type: FETCH_USER_NOTIFICATIONS,
    payload: api().get(`/user/notifications`)
  };
}
export function markNotificationsAsSeen() {
  return {
    type: MARK_USER_NOTIFICATIONS_READ,
    payload: api().put(`/user/notifications/seen`)
  };
}

export function signupUser() {
  return {
    type: SIGNUP_USER,
    payload: api().post(`/user/signup`)
  };
}
export function signupWithEmail({ email, password }) {
  return {
    type: SIGNUP_WITH_EMAIL,
    payload: api().post(`/user/signup-email`, { email, password })
  };
}
export function loginUser() {
  return {
    type: LOGIN_USER,
    payload: api().post(`/user/login`)
  };
}
export function loginWithEmail({ email, password }) {
  return {
    type: LOGIN_WITH_EMAIL,
    payload: api().post(`/user/login-email`, { email, password })
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: api().post(`/user/logout`)
  };
}
export function refreshToken() {
  return {
    type: REFRESH_USER_TOKEN,
    payload: api().get(`/user/refreshToken`)
  };
}
