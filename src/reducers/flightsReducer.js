import { FETCH_FLIGHTS } from '../actions/flightActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_FLIGHTS}_FULFILLED`:
      return action.payload.data;
    default:
      return state;
  }
}
