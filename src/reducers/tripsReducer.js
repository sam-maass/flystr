import { FETCH_USER } from '../actions/userActions';
import { CREATE_TRIP_FROM_DEAL } from '../actions/tripActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_USER}_FULFILLED`:
      return action.payload.data.trips;
    case `${CREATE_TRIP_FROM_DEAL}_FULFILLED`:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
