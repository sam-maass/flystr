import axios from 'axios';
export const loadDeals = (req, res, next) => {
  axios
    .get('https://api.flystr.com/deals')
    .then(deals => {
      req.fetchedDeals = deals;
      next();
    })
    .catch(() => next());
};
export const loadDeal = (req, res, next) => {
  axios
    .get(`https://api.flystr.com/deal/${req.params.slug}`, { timeout: 500 })
    .then(deal => {
      req.currentDeal = deal;
      next();
    })
    .catch(() => {
      req.fetchDealFailed = true;
      next();
    });
};
