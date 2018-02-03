export default function reducer(state = [], action) {
  switch (action.type) {
    case 'GET_USER_TRIPS':
      return [...state];
    case 'GET_USER_TRIPS_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_USER_FULFILLED':
      return action.payload.data.trips;
    default:
      return state;
  }
}
