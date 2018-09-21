export default function reducer(state = [test], action) {
  switch (action.type) {
    case 'ADD_FLIGHT_TEMPLATES':
      return [...state, ...action.payload];
    case 'CHANGE_FLIGHT_TEMPLATE':
      return changeFlightTemplate([...state], action.payload);
    default:
      return state;
  }
}

const changeFlightTemplate = (flightTemplates, { atIndex, key, value }) => {
  flightTemplates[atIndex][key] = value;
  return flightTemplates;
};

const test = {
  link:
    'https://www.google.com/flights#flt=DUS.SEZ.2018-10-06*SEZ.DUS.2018-10-10;c:EUR;e:1;sd:1;t:f',
  outOrigin: 'DUS',
  outDate: '2018-10-06',
  outDestination: 'SEZ',
  inOrigin: 'SEZ',
  inDate: '2018-10-10',
  inDestination: 'DUS',
  selectedLink: 'original'
};
