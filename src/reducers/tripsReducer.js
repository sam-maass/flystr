import { FETCH_USER } from '../actions/userActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_USER}_FULFILLED`:
      return action.payload.data.trips;
    default:
      return state;
  }
}
