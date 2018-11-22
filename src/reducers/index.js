import { combineReducers } from 'redux';

import user from './userReducer';
import trips from './tripsReducer';
import errors from './errorReducer';
import appBar from './appBar';
import allTrips from './allTrips';
import deals from './dealReducer';
import currentDeal from './currentDealReducer';
import currentTrip from './currentTripReducer';
import routing from './routingReducer';
import landingpageDeals from './landingpageDealsReducer';
import flightTemplates from './flightTemplatesReducer';
import flights from './flightsReducer';
import notifications from './notificationReducer';
import modal from './modalReducer';

export default combineReducers({
  notifications,
  currentTrip,
  flights,
  flightTemplates,
  landingpageDeals,
  currentDeal,
  deals,
  user,
  trips,
  allTrips,
  errors,
  appBar,
  routing,
  modal
});
