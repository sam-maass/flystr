export default function reducer(state = [], action) {
  switch (action.type) {
    case 'DELETE_LAST_ERROR':
      return [...state.slice(1)];
    case 'ADD_ERROR':
      return [...state, { error: action.payload.error }];
    case 'LOGIN_USER_REJECTED':
      return [...state, { error: action.payload.response.data.error }];
    case 'SIGNUP_USER_REJECTED':
      return [...state, { error: action.payload.response.data.error }];
    case 'SIGNUP_WITH_EMAIL_REJECTED':
      return [...state, { error: action.payload.response.data.error }];
    case 'LOGIN_WITH_EMAIL_REJECTED':
      return [...state, { error: action.payload.response.data.error }];
    default:
      return state;
  }
}
