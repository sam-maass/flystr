import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = isProd ? 'https://api.flystr.com' : 'http://localhost:3000';
export const isBrowser = () => typeof window !== 'undefined';

const getToken = () =>
  isBrowser() ? window.localStorage.getItem('currentJWT') : null;
export const api = () => {
  return axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: { common: { Authorization: getToken() } }
  });
};
