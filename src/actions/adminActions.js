import { api } from '../settings';
export const FETCH_ALL_TRIPS = 'FETCH_ALL_TRIPS';

export function fetchAllTrips() {
  return {
    type: FETCH_ALL_TRIPS,
    payload: api().get(`/trips/all`)
  };
}
