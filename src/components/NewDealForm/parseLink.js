import Route from 'route-parser';
import moment from 'moment';

const momondoRoute = new Route(
  '/flight-search/:origin-:destination/:departureDate(/:inOrigin-:inDestination)/:returnDate(/:adultCount)(/)'
);
const kayakRoute = new Route(
  '/flights/:origin-:destination/:departureDate(/:inOrigin-:inDestination)/:returnDate(/:adultCount)(/)'
);
const skyscannerRoute = new Route(
  '/transport/d/:origin/:departureDate/:destination/:inOrigin/:returnDate/:inDestination(/)'
);

const skyscannerRoute2 = new Route(
  '/transport/flights/:origin/:destination/:departureDate/:returnDate(/)'
);

const destructureGoogleUrl = url => {
  const [
    domain,
    linkSource,
    outOrigin,
    outDestination,
    departureDate,
    inOrigin,
    inDestination,
    returnDate
  ] = /.*(google.\w{2,3}.\w{0,3})\/.*#flt=(.*?)\.(.*?)\.(.*?)\*(.*?)\.(.*?)\.(.*?);/.exec(
    url
  );

  return {
    groups: {
      domain,
      linkSource,
      outOrigin,
      outDestination,
      departureDate,
      inOrigin,
      inDestination,
      returnDate
    }
  };
};

const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/;

export const parseLinksFromText = text => {
  const linkRegex = /https?:.*?((?="\s)|$)/g;
  const links = text.match(linkRegex);
  if (links === null) {
    return [];
  }
  return links.map(link => parseLink(link));
};

export const parseLink = link => {
  link = link.split('?')[0];
  const domain = link.match(domainRegex)[0];
  const path = link.split(domain)[1];
  const linkSource = getLinkSource(link);
  let linkParams = {};
  try {
    switch (true) {
      case linkSource.includes('kayak'):
        linkParams = parseKayakLink(domain, path);
        break;
      case linkSource.includes('skyscanner'):
        linkParams = parseSkyscannerLink(domain, path);
        break;
      case linkSource.includes('google'):
        linkParams = parseGoogleLink(link);
        break;
      case linkSource.includes('momondo'):
        linkParams = parseMomondoLink(domain, path);
        break;
      default:
        break;
    }
  } catch (error) {
    //eslint-disable-next-line
    console.error('could not parse URL', { error });
  }

  return {
    link,
    ...linkParams,
    selectedLink: 'original'
  };
};

const parseMomondoLink = (domain, path) => {
  const params = momondoRoute.match(path);
  return {
    outOrigin: params.origin,
    outDate: params.departureDate,
    outDestination: params.destination,
    inOrigin: params.destination,
    inDate: params.returnDate,
    inDestination: params.origin,
    link: domain + momondoRoute.reverse(params)
  };
};

const parseKayakLink = (domain, path) => {
  const params = kayakRoute.match(path);
  return {
    outOrigin: params.origin,
    outDate: params.departureDate,
    outDestination: params.destination,
    inOrigin: params.destination,
    inDate: params.returnDate,
    inDestination: params.origin,
    link: domain + kayakRoute.reverse(params)
  };
};

const parseSkyscannerLink = (domain, path) => {
  let params = skyscannerRoute.match(path);
  if (!params.origin) {
    params = skyscannerRoute2.match(path);
    params = normalizeDates(params, 'YYMMDD');
  }

  return {
    outOrigin: params.origin.substr(0, 3),
    outDate: params.departureDate,
    outDestination: params.destination.substr(0, 3),
    inOrigin: params.origin.substr(0, 3),
    inDate: params.returnDate,
    inDestination: params.destination.substr(0, 3)
  };
};

const parseGoogleLink = link => {
  const { groups } = destructureGoogleUrl(link);

  return {
    outOrigin: groups.outOrigin,
    outDate: groups.departureDate,
    outDestination: groups.outDestination,
    inOrigin: groups.inOrigin,
    inDate: groups.returnDate,
    inDestination: groups.inDestination
  };
};

function normalizeDates(params, format) {
  params.departureDate = normalizeDate(params.departureDate);
  params.returnDate = normalizeDate(params.returnDate);
  return params;

  function normalizeDate(date) {
    return moment(date, format).format('YYYY-MM-DD');
  }
}

export function getLinkSource(link) {
  return link.match(domainRegex)[1];
}
