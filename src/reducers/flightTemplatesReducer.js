export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FLIGHT_TEMPLATES':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
