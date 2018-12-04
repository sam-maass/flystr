export function getDealMetaData({
  title,
  subtitle,
  minPrice,
  currency = 'EUR',
  destinations
}) {
  const metaTitle = `Flights to ${title} from ${subtitle} from ${minPrice} ${currency}`;
  const metaDescription = `Tripfixed makes cheap trips easy. Save up to 67% on flights and get notifications so you never miss a cheap flight again.`;
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
