import { logEvent } from './logEvent';

export const logClick = (url, { category = '' }) => () => {
  logEvent({ category, label: url, type: 'click' })();
};
