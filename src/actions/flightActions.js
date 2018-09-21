import { api } from '../settings';

export function fetchFlights() {
  return {
    type: 'FETCH_FLIGHTS',
    payload: api().get(`/flights`)
  };
}

export function deleteFlight(id) {
  return {
    type: 'REMOVE_FLIGHT',
    payload: api().delete(`/flight/${id}`)
  };
}
