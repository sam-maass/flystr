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
