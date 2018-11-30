import { FETCH_DEAL } from '../actions/dealActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case `${FETCH_DEAL}_PENDING`:
      return {};
    case `${FETCH_DEAL}_FULFILLED`:
      return action.payload.data;
    case `${FETCH_DEAL}_REJECTED`:
      return { noDealFound: true };
    default:
      return state;
  }
}
