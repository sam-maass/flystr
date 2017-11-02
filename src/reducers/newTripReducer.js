const defaults = {
  duration: null,
  destinations: '',
  startDate: new Date().toISOString().substring(0, 10),
  maxPrice: null
};

export default function reducer(state = { ...defaults }, action) {
  switch (action.type) {
    case 'NEW_TRIP_CHANGE':
      return { ...state, ...action.payload };
    case 'SUBMIT_NEW_TRIP_FULFILLED':
      return { ...state, submitted: true };
    default:
      return state;
  }
}
