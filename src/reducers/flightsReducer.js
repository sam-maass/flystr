export default function reducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FLIGHTS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
