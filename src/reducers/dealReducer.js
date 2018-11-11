import { FETCH_DEALS } from '../actions/dealActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_DEALS}_FULFILLED`:
      return action.payload.data;
    default:
      return state;
  }
}
