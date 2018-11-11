import { FETCH_USER_NOTIFICATIONS } from '../actions/userActions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_USER_NOTIFICATIONS}_FULFILLED`:
      return action.payload.data;
    default:
      return state;
  }
}
