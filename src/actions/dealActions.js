import { api } from '../settings';

export function fetchDeals() {
  return {
    type: 'FETCH_DEALS',
    payload: api().get(`/deals`)
  };
}
