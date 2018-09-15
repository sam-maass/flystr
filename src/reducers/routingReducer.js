export default function reducer(
  state = { currentRoute: undefined, previousRoute: undefined },
  action
) {
  switch (action.type) {
    case 'UPDATE_ROUTE':
      return {
        currentRoute: action.payload.route,
        previousRoute: state.currentRoute
      };
    default:
      return state;
  }
}
