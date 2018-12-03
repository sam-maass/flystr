import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = isProd ? 'https://api.tripfixed.com' : 'http://localhost:3000';
export const STRIPE_PUBLIC_KEY = isProd
  ? 'pk_live_ydxng3l6sJblKJdPQ6MZjX6x'
  : 'pk_test_xGpp4JhwiX7rpcffTTjiRkYU';
export const isBrowser = () => typeof window !== 'undefined';

const getToken = () =>
  isBrowser() ? window.localStorage.getItem('currentJWT') : null;
export const api = () => {
  return axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: { common: { Authorization: getToken() } }
  });
};
