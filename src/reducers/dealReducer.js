export default function reducer(state = [], action) {
  switch (action.type) {
    case 'GET_DEALS':
      return state;
    case 'GET_DEALS_FULFILLED':
      return [...action.payload.data];
    default:
      return state;
  }
}
