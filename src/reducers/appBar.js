import { SET_APPBAR } from '../actions/appbarActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_APPBAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
