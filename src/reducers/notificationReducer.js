export default function reducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_USER_NOTIFICATIONS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
