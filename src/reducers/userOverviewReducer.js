import { FETCH_USER_OVERVIEW } from '../actions/adminActions';

const defaultState = {
  totalUsers: 0,
  monthlyActiveUsers: 0,
  newUsers: 0,
  userList: []
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case `${FETCH_USER_OVERVIEW}_FULFILLED`:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
}
