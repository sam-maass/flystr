export default function reducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_LANDINGPAGE_DEALS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
