import axios from 'axios';
import { apiUrl } from '../settings';

export function getDeals(dealParams) {
  axios.defaults.headers.common['Authorization'] = window.localStorage.getItem(
    'currentJWT'
  );
  return {
    type: 'GET_DEALS',
    payload: axios.get(`${apiUrl}/deal`, { params: dealParams })
  };
}

export function getAllDeals() {
  axios.defaults.headers.common['Authorization'] = window.localStorage.getItem(
    'currentJWT'
  );
  return {
    type: 'GET_DEALS',
    payload: axios.get(`${apiUrl}/deal/all`)
  };
}
