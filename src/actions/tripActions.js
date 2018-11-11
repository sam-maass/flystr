import { api } from '../settings';
export const FETCH_TRIP = 'FETCH_TRIP';

export function fetchTrip(tripId) {
  return {
    type: FETCH_TRIP,
    payload: api().get(`/trip/${tripId}`)
  };
}
