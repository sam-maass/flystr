export default function reducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DEALS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
