export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export function openGlobalModal(content) {
  return {
    type: OPEN_MODAL,
    payload: { content }
  };
}
export function closeGlobalModal() {
  return {
    type: CLOSE_MODAL,
    payload: {}
  };
}
