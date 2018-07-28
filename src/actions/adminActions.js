import { api } from '../settings';

export function fetchAllTrips() {
  return {
    type: 'FETCH_ALL_TRIPS',
    payload: api().get(`/trips/all`)
  };
}
