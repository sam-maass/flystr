export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'COPY_DEAL':
      return action.payload;
    case 'FETCH_DEAL_FULFILLED':
      return action.payload.data;
    case 'FETCH_DEAL_REJECTED':
      return { noDealFound: true };
    default:
      return state;
  }
}
