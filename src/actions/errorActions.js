export const DELETE_LAST_ERROR = 'DELETE_LAST_ERROR';
export const ADD_ERROR = 'ADD_ERROR';
export function deleteError() {
  return {
    type: DELETE_LAST_ERROR,
    payload: {}
  };
}
export function addError(error) {
  return {
    type: ADD_ERROR,
    payload: { error }
  };
}
