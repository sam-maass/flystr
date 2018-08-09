import hash from 'string-hash';
const fallbackImages = ['airplane', 'airplane2', 'airplane3', 'airplane4'];

const getFallback = code => {
  const index = hash(code) % fallbackImages.length;
  return fallbackImages[index];
};

export const getDestinationImage = (type, code, { fallback } = {}) => {
  switch (type) {
    case 'header':
      if (!fallback) {
        return `/images/header/${code}.jpg`;
      } else {
        return `/images/header/${getFallback(code)}.jpg`;
      }
    case 'square':
      if (!fallback) {
        return `/images/square/${code}.jpg`;
      } else {
        return `/images/square/${getFallback(code)}.jpg`;
      }

    default:
      break;
  }
};
