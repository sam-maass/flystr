export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, fetching: true };
    case 'FETCH_USER_REJECTED':
      return { ...state, fetching: false, error: action.payload };
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        ...action.payload.data
      };
    case 'LOGIN_USER_FULFILLED':
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
}
