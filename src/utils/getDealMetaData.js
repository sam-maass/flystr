export function getDealMetaData({
  title,
  subtitle,
  minPrice,
  currency = 'EUR',
  destinations
}) {
  const metaTitle = `Cheap Flights to ${title} from ${subtitle} - Tripfixed`; // 70-71 char
  const metaDescription = `Discover ${title} departing from ${subtitle} for just ${minPrice} ${currency}. Check available dates or enable price notifications today.`;
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
