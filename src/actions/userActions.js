import axios from 'axios';
export function fetchUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'FETCH_USER',
    payload: axios.get('https://api.flystr.com/user/profile')
  };
}
export function loginUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGIN_USER',
    payload: axios.post('https://api.flystr.com/user/login')
  };
}
export function logoutUser(token) {
  axios.defaults.headers.common['Authorization'] = token;
  return {
    type: 'LOGOUT_USER',
    payload: axios.post('https://api.flystr.com/user/logout')
  };
}
