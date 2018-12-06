export function getDealMetaData({
  title,
  subtitle,
  minPrice,
  currency = 'EUR',
  destinations
}) {
  const metaTitle = `Cheap Flights to ${title} from ${subtitle} - Tripfixed`; // 70-71 chars
  const metaDescription = `Discover ${title} from ${minPrice} ${currency}. See more of the world with low-cost flights from ${subtitle}. Start saving and plan your own bargain trips for free on Tripfixed.`; //
  const twitterTitle = `Discover ${title} on a budget`;
  const twitterDescription = `Pay less, travel more - with flights from ${subtitle} starting at just ${minPrice} ${currency}. Plan your own bargain trips on Tripfixed for free and start saving today.`; // 67 chars on FB, >200 on twitter
  const fbDescription = `Flights from ${subtitle} starting at just ${minPrice} ${currency}`;
  const twitterImage = `https://tripfixed.com/destination-images/header/${
    destinations[0]
  }.jpg`;
  return {
    metaTitle,
    metaDescription,
    twitterTitle,
    twitterDescription,
    twitterImage,
    fbDescription
  };
}
