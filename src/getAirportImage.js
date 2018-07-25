import NYC from 'images/NYC.jpg';
import ATH from 'images/ATH.jpg';
import BLQ from 'images/BLQ.jpg';
import DPS from 'images/DPS.jpg';
import HKG from 'images/HKG.jpg';
import FRA from 'images/FRA.jpg';
import LGW from 'images/LGW.jpg';
import SIN from 'images/SIN.jpg';

const images = {
  NYC,
  ATH,
  BLQ,
  DPS,
  HKG,
  LGW,
  FRA,
  SIN
};

export const getAirportImage = code => {
  const defaultImage = images['ATH'];
  return images[code] || defaultImage;
};
