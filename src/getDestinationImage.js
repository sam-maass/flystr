export const getDestinationImage = (type, code = {}) => {
  switch (type) {
    case 'header':
      return `https://tripfixed.com/destination-images/header/${code}.jpg`;
    case 'header-wide':
      return `https://tripfixed.com/destination-images/header-wide/${code}.jpg`;
    case 'square':
      return `https://tripfixed.com/destination-images/card/${code}.jpg`;
    default:
      break;
  }
};
