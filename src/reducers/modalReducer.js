import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { content: action.payload.content };
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
}
