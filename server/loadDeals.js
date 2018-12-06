import axios from 'axios';
import { getApiPath } from './settings';
const apiPath = getApiPath();

export const loadDeals = (req, res, next) => {
  axios
    .get(`${apiPath}/deals`, { params: { ...req.query, ...req.params } })
    .then(deals => {
      req.fetchedDeals = deals;
      next();
    })
    .catch(() => next());
};

export const loadRecentDeals = (req, res, next) => {
  axios
    .get(`${apiPath}/recentDeals`)
    .then(deals => {
      req.fetchedLandingpageDeals = deals;
      next();
    })
    .catch(() => next());
};

export const loadDeal = (req, res, next) => {
  axios
    .get(`${apiPath}/deal/${req.params.slug}`, { timeout: 2000 })
    .then(deal => {
      req.currentDeal = deal;
      next();
    })
    .catch(() => {
      req.fetchDealFailed = true;
      next();
    });
};
