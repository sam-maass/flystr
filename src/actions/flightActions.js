import { api } from '../settings';

export const ADD_FLIGHT = 'ADD_FLIGHT';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const REMOVE_FLIGHT = 'REMOVE_FLIGHT';

export function fetchFlights() {
  return {
    type: FETCH_FLIGHTS,
    payload: api().get(`/flights`)
  };
}

export function deleteFlight(id) {
  return {
    type: REMOVE_FLIGHT,
    payload: api().delete(`/flight/${id}`)
  };
}

export function addFlight(flight) {
  return {
    type: ADD_FLIGHT,
    payload: api().post(`/flight`, { flight })
  };
}
