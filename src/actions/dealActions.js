import { api } from '../settings';

export function getDeals(dealParams) {

  return {
    type: 'GET_DEALS',
    payload: api.get(`/deal`, { params: dealParams })
  };
}

export function getAllDeals() {
  return {
    type: 'GET_DEALS',
    payload: api.get(`/trip/deals`)
  };
}
