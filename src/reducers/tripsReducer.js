export default function reducer(state = [], action) {
  switch (action.type) {
    case 'GET_USER_TRIPS':
      return [...state];
    case 'GET_USER_TRIPS_FULFILLED':
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
