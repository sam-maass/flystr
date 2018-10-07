import { api } from '../settings';

export function fetchTrip(tripId) {
  return {
    type: 'FETCH_TRIP',
    payload: api().get(`/trip/${tripId}`)
  };
}
