import axios from 'axios';
export function fetchUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:3000/user/profile')
  };
}
export function loginUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGIN_USER',
    payload: axios.post('http://localhost:3000/user/login')
  };
}
export function logoutUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGOUT_USER',
    payload: axios.post('http://localhost:3000/user/logout')
  };
}
