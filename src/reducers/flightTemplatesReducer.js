export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FLIGHT_TEMPLATES':
      return [...state, ...action.payload];
    case 'CHANGE_FLIGHT_TEMPLATE':
      return changeFlightTemplate([...state], action.payload);
    case 'REMOVE_FLIGHT_TEMPLATE':
      return [
        ...state.filter((elem, index) => index !== action.payload.templateIndex)
      ];
    default:
      return state;
  }
}

const changeFlightTemplate = (flightTemplates, { atIndex, key, value }) => {
  flightTemplates[atIndex][key] = value;
  return flightTemplates;
};
