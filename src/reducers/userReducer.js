export default function reducer(state = { ready: false }, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, fetching: true };
    case 'FETCH_USER_REJECTED':
      return {
        fetchFailed: true,
        ready: true,
        fetching: false,
        error: action.payload
      };
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        ready: true,
        fetching: false,
        fetched: true,
        ...action.payload.data.user
      };
    case 'LOGIN_USER_FULFILLED':
      return { ...state, ...action.payload.data, ready: true };
    case 'SIGNUP_USER_FULFILLED':
      return { ...state, ...action.payload.data, ready: true };
    case 'LOGOUT_USER_FULFILLED':
      return { ready: true };
    default:
      return state;
  }
}
