export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'NEW_TRIP_CHANGE':
      return { ...state, ...action.payload };
    case 'SUBMIT_NEW_TRIP_FULFILLED':
      return { ...state, submitted: true };
    default:
      return state;
  }
}
