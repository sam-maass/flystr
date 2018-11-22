import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';
import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGIN_WITH_EMAIL
} from '../actions/userActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { content: action.payload.content };
    case CLOSE_MODAL:
      return {};
    case `${LOGIN_USER}_FULFILLED`:
      return {};
    case `${SIGNUP_USER}_FULFILLED`:
      return {};
    case `${LOGIN_WITH_EMAIL}_FULFILLED`:
      return {};
    default:
      return state;
  }
}
