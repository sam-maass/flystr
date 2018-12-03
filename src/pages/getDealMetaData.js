import { getDestinationAdverb } from './getDestinationAdverb';
import { getTimeframeString } from '../utils';
export function getDealMetaData({
  title,
  subtitle,
  firstDeparture,
  lastReturn,
  minPrice,
  currency = 'EUR',
  destinations
}) {
  const metaTitle = `Flights to ${title} from ${subtitle} | Tripfixed`;
  const adverb = getDestinationAdverb(title);
  const timeframe = getTimeframeString({
    startDate: firstDeparture,
    endDate: lastReturn
  });
  const metaDescription = `Flights to ${adverb} ${title}. We found flights from ${subtitle} for only ${minPrice} ${currency} during ${timeframe}. Check available dates today and book your next vacation to ${title}.`;
  const twitterImage = `https://tripfixed.com/destination-images/header/${
    destinations[0]
  }.jpg`;
  const twitterTitle = metaTitle;
  const twitterDescription = metaDescription;
  return {
    metaTitle,
    metaDescription,
    twitterTitle,
    twitterDescription,
    twitterImage
  };
}
