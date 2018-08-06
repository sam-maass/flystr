const kayakRegex = /(?<linkSource>kayak.\w{2,3})\/.*(?<origin>[A-Z]{3})-(?<destination>[A-Z]{3})\/(?<departureDate>.{10})\/(?<returnDate>.{10})/;
const skyscannerRegex = /(?<linkSource>skyscanner.\w{2,3})\/.*\/(?<outOrigin>[A-Z]{3,4})\/(?<departureDate>.{10})\/(?<outDestination>[A-Z]{3,4})\/(?<inOrigin>[A-Z]{3,4})\/(?<returnDate>.{10})\/(?<inDestination>[A-Z]{3,4})/;
const googleRegex = /(?<linkSource>google.\w{2,3}.\w{0,3})\/.*#flt=(?<outOrigin>.*?)\.(?<outDestination>.*?)\.(?<departureDate>.*?)\*(?<inOrigin>.*?)\.(?<inDestination>.*?)\.(?<returnDate>.*?);/;

export const parseLinksFromText = text => {
  const linkRegex = /https?:.*?((?="\s)|$)/g;
  const links = text.match(linkRegex);
  return links.map(link => parseLink(link));
};

export const parseLink = link => {
  let linkParams = {};
  switch (true) {
    case kayakRegex.test(link):
      linkParams = parseKayakLink(link);
      break;
    case skyscannerRegex.test(link):
      linkParams = parseSkyscannerLink(link);
      break;
    case googleRegex.test(link):
      linkParams = parseGoogleLink(link);
      break;

    default:
      linkParams = { linkSource: 'Unknown' };
      break;
  }
  return { link, ...linkParams };
};

const parseKayakLink = link => {
  const { groups } = kayakRegex.exec(link);
  return {
    outOrigin: groups.origin,
    outDate: groups.departureDate,
    outDestination: groups.destination,
    inOrigin: groups.destination,
    inDate: groups.returnDate,
    inDestination: groups.origin,
    linkSource: groups.linkSource
  };
};

const parseSkyscannerLink = link => {
  const { groups } = skyscannerRegex.exec(link);
  return {
    outOrigin: groups.outOrigin.substr(0, 3),
    outDate: groups.departureDate,
    outDestination: groups.outDestination.substr(0, 3),
    inOrigin: groups.inOrigin.substr(0, 3),
    inDate: groups.returnDate,
    inDestination: groups.inDestination.substr(0, 3),
    linkSource: groups.linkSource
  };
};

const parseGoogleLink = link => {
  const { groups } = googleRegex.exec(link);
  return {
    outOrigin: groups.outOrigin,
    outDate: groups.departureDate,
    outDestination: groups.outDestination,
    inOrigin: groups.inOrigin,
    inDate: groups.returnDate,
    inDestination: groups.inDestination,
    linkSource: groups.linkSource
  };
};
