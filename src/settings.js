import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = isProd
  ? 'https://api.flystr.com'
  : 'http://localhost:3000';


export const api = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});
