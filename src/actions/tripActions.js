import { api } from '../settings';
export const FETCH_TRIP = 'FETCH_TRIP';
export const CREATE_DEAL_FROM_TRIP = 'CREATE_DEAL_FROM_TRIP';

export function fetchTrip(tripId) {
  return {
    type: FETCH_TRIP,
    payload: api().get(`/trip/${tripId}`)
  };
}

export function createDealFromTrip(options) {
  return {
    type: CREATE_DEAL_FROM_TRIP,
    payload: api().post(`/deal`, options)
  };
}
