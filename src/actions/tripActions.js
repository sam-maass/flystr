import { api } from '../settings';
export const FETCH_TRIP = 'FETCH_TRIP';
export const CREATE_DEAL_FROM_TRIP = 'CREATE_DEAL_FROM_TRIP';
export const CREATE_TRIP_FROM_DEAL = 'CREATE_TRIP_FROM_DEAL';

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

export function createTripFromDeal(dealId) {
  return {
    type: CREATE_TRIP_FROM_DEAL,
    payload: api().post(`/trips`, { dealId })
  };
}
