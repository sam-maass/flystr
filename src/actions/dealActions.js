import { api } from '../settings';
export const FETCH_DEAL = 'FETCH_DEAL';
export const FETCH_DEALS = 'FETCH_DEALS';
export const FETCH_LANDINGPAGE_DEALS = 'FETCH_LANDINGPAGE_DEALS';

export function fetchDeals(params) {
  return {
    type: FETCH_DEALS,
    payload: api().get(`/deals`, { params })
  };
}

export function fetchDeal(dealId) {
  return {
    type: FETCH_DEAL,
    payload: api().get(`/deal/${dealId}`)
  };
}

export function fetchLandingpageDeals() {
  return {
    type: FETCH_LANDINGPAGE_DEALS,
    payload: api().get(`/recentDeals`)
  };
}
