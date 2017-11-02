import axios from 'axios';

export function submitNewTrip(newTrip) {
  axios.defaults.headers.common['Authorization'] = window.localStorage.getItem(
    'currentJWT'
  );
  return {
    type: 'SUBMIT_NEW_TRIP',
    payload: axios.post('http://localhost:3000/trip', {
      ...newTrip,
      destinations: newTrip.destinations.split(',')
    })
  };
}
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
    payload: axios.get('http://localhost:3000/trip')
  };
}
