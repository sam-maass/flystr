import { api } from '../settings';

export function fetchFlights() {
  return {
    type: 'FETCH_FLIGHTS',
    payload: api().get(`/flights`)
  };
}
