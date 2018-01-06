import axios from 'axios';
import { apiUrl } from '../settings';
export function changeNewTrip(change) {
  return {
    type: 'NEW_TRIP_CHANGE',
    payload: change
  };
}
export function getUserTrips() {
  axios.defaults.headers.common['Authorization'] = window.localStorage.getItem(
    'currentJWT'
  );
  return {
    type: 'GET_USER_TRIPS',
    payload: axios.get(`${apiUrl}/trip`)
  };
}
