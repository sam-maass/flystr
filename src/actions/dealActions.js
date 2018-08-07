import { api } from '../settings';

export function fetchDeals() {
  return {
    type: 'FETCH_DEALS',
    payload: api().get(`/deals`)
  };
}

export function copyDeal(deal) {
  return {
    type: 'COPY_DEAL',
    payload: deal
  };
}

export function fetchDeal(dealId) {
  return {
    type: 'FETCH_DEAL',
    payload: api().get(`/deal/${dealId}`)
  };
}
