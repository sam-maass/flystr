export function deleteError() {
  return {
    type: 'DELETE_LAST_ERROR',
    payload: {}
  };
}
export function addError(error) {
  return {
    type: 'ADD_ERROR',
    payload: { error }
  };
}