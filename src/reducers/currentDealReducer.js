export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'COPY_DEAL':
      return action.payload;
    case 'FETCH_DEAL_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
