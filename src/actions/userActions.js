import axios from 'axios';
import { apiUrl } from '../settings';

export function fetchUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'FETCH_USER',
    payload: axios.get(`${apiUrl}/user/profile`)
  };
}
export function signupUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'SIGNUP_USER',
    payload: axios.post(`${apiUrl}/user/signup`)
  };
}
export function loginUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`${apiUrl}/user/login`)
  };
}
export function logoutUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGOUT_USER',
    payload: axios.post(`${apiUrl}/user/logout`)
  };
}
