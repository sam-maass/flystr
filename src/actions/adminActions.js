import { api } from '../settings';
export const FETCH_ALL_TRIPS = 'FETCH_ALL_TRIPS';
export const FETCH_USER_OVERVIEW = 'FETCH_USER_OVERVIEW';

export function fetchUserOverview() {
  return {
    type: FETCH_USER_OVERVIEW,
    payload: api().get(`/user/adminOverview`)
  };
}

export function fetchAllTrips() {
  return {
    type: FETCH_ALL_TRIPS,
    payload: api().get(`/trips/all`)
  };
}
