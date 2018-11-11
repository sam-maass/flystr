import { FETCH_ALL_TRIPS } from '../actions/adminActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_ALL_TRIPS}_FULFILLED`:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
