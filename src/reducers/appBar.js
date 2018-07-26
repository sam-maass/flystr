export default function reducer(state = { title: 'test' }, action) {
  switch (action.type) {
    case 'SET_APPBAR':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
