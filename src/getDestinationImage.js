export const getDestinationImage = (type, code = {}) => {
  switch (type) {
    case 'header':
      return `https://flystr.com/destination-images/header/${code}.jpg`;
    case 'header-wide':
      return `https://flystr.com/destination-images/header-wide/${code}.jpg`;
    case 'square':
      return `https://flystr.com/destination-images/card/${code}.jpg`;
    default:
      break;
  }
};
