import { FETCH_TRIP } from '../actions/tripActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case `${FETCH_TRIP}_PENDING`:
      return {};
    case `${FETCH_TRIP}_FULFILLED`:
      return action.payload.data;
    case `${FETCH_TRIP}_REJECTED`:
      return { noTripFound: true };
    default:
      return state;
  }
}
