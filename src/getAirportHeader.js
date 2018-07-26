import DPS from 'images/header/DPS.jpg';
import HKG from 'images/header/HKG.jpg';
import FRA from 'images/header/FRA.jpg';
import LGW from 'images/header/LGW.jpg';
import SIN from 'images/header/SIN.jpg';

const images = {
  DPS,
  HKG,
  LGW,
  FRA,
  SIN
};

export const getAirportHeader = code => {
  const defaultImage = images['ATH'];
  return images[code] || defaultImage;
};
