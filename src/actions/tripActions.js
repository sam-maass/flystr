import { api } from '../settings';

export function getUserTrips() {
  return {
    type: 'GET_USER_TRIPS',
    payload: api.get(`/trip`)
  };
}
