import store from '../store';
import { refreshToken } from '../actions/userActions';
import ms from 'ms';

export const setJWT = token => {
  window.localStorage.setItem('currentJWT', token);
  setJwtRefreshTimer(token);
};

export let refreshTimer = undefined;

export const setJwtRefreshTimer = token => {
  import('jsonwebtoken').then(jwt => {
    const _token = token || window.localStorage.getItem('currentJWT');
    const { exp } = jwt.decode(_token);
    const timeToExpiration = exp * 1000 - Date.now();
    const refreshInMS = Math.max(timeToExpiration - ms('5m'), 0);
    refreshTimer = setTimeout(
      () => store.dispatch(refreshToken()),
      refreshInMS
    );
  });
};
