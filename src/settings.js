const isProd = process.env.NODE_ENV === 'production';
export const apiUrl = isProd
  ? 'https://api.flystr.com/'
  : 'http://localhost:3000';
