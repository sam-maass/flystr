import axios from 'axios';
export function fetchUser(token) {
  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:3000/user/profile', {
      params: { token }
    })
  };
}
export function loginUser(token) {
  return {
    type: 'LOGIIN_USER',
    payload: axios.post('http://localhost:3000/user/login', {
      token
    })
  };
}
