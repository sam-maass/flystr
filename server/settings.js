const isProd = process.env.NODE_ENV === 'production';
const localApiPath = 'http://localhost:3000';
const liveApiPath = 'https://api.tripfixed.com';
export const getApiPath = () => (isProd ? liveApiPath : localApiPath);
