export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, fetching: true };
    case 'FETCH_USER_REJECTED':
      return { fetchFailed: true, fetching: false, error: action.payload };
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        ...action.payload.data
      };
    case 'LOGIN_USER_FULFILLED':
      return { ...state, ...action.payload.data };
    case 'LOGOUT_USER_FULFILLED':
      return {};
    default:
      return state;
  }
}
