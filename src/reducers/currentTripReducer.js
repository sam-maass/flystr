export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_TRIP_PENDING':
      return {};
    case 'FETCH_TRIP_FULFILLED':
      return action.payload.data;
    case 'FETCH_TRIP_REJECTED':
      return { noTripFound: true };
    default:
      return state;
  }
}
