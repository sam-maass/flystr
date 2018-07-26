export function setAppbar({ title, withDrawer, withReturn }) {
  return {
    type: 'SET_APPBAR',
    payload: { title, withDrawer, withReturn }
  };
}
