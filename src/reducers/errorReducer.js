import { DELETE_LAST_ERROR, ADD_ERROR } from '../actions/errorActions';
import {
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_WITH_EMAIL,
  LOGIN_WITH_EMAIL,
  PURCHASE_SUBSCRIPTION
} from '../actions/userActions';
import { CREATE_TRIP_FROM_DEAL } from '../actions/tripActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case DELETE_LAST_ERROR:
      return [...state.slice(1)];
    case ADD_ERROR:
      return [...state, { error: action.payload.error }];
    case `${LOGIN_USER}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${SIGNUP_USER}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${SIGNUP_WITH_EMAIL}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${LOGIN_WITH_EMAIL}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${PURCHASE_SUBSCRIPTION}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${CREATE_TRIP_FROM_DEAL}_REJECTED`:
      return [...state, { error: action.payload.response.data.error }];
    case `${CREATE_TRIP_FROM_DEAL}_FULFILLED`:
      return [...state, { error: 'Added 1 Trip to Wishlist' }];
    default:
      return state;
  }
}
