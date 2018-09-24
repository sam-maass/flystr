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

export function addFlight(flight) {
  return {
    type: 'ADD_FLIGHT',
    payload: api().post(`/flight`, { flight })
  };
}
