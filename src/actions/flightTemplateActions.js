export function addFlightTemplates(flightTemplates) {
  return {
    type: 'ADD_FLIGHT_TEMPLATES',
    payload: flightTemplates
  };
}

export function changeFlightTemplate({ atIndex, key, value }) {
  return {
    type: 'CHANGE_FLIGHT_TEMPLATE',
    payload: { atIndex, key, value }
  };
}

export function removeFlightTemplate(templateIndex) {
  return {
    type: 'REMOVE_FLIGHT_TEMPLATE',
    payload: { templateIndex }
  };
}
