import { getDestinationAdverb } from './getDestinationAdverb';
import { getTimeframeString } from '../utils';
export function getDealMetaData({
  title,
  subtitle,
  firstDepatrue,
  lastReturn,
  minPrice,
  currency = 'EUR',
  destinations
}) {
  const metaTitle = `Flystr | Flights to ${title} from ${subtitle}`;
  const adverb = getDestinationAdverb(title);
  const timeframe = getTimeframeString({
    startDate: firstDepatrue,
    endDate: lastReturn
  });
  const metaDescription = `Fly to ${adverb} ${title}. We found flights from ${subtitle} during ${timeframe} for only ${minPrice} ${currency}. Book your next vacation to ${title} now.`;
  const twitterImage = `https://flystr.com/destination-images/header/${
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
