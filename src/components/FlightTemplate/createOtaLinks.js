import moment from 'moment';

const transformDate = date => moment(date, 'YYYY-MM-DD').format('YYMMDD');
const shortDate = date => moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

export function createOtaLinks(res, originalLink, keepOriginal = true) {
  const outDate = shortDate(res.outDate);
  const inDate = shortDate(res.inDate);
  const original = { displayName: 'Original', url: originalLink };
  const momondo = {
    displayName: 'Momondo',
    url: `https://momondo.de/flight-search/${res.outOrigin}-${
      res.outDestination
    }/${outDate}/${inDate}`
  };
  const kayak = {
    displayName: 'Kayak',
    url: `https://kayak.de/flights/${res.outOrigin}-${
      res.outDestination
    }/${outDate}/${inDate}`
  };
  const skyscanner = {
    displayName: 'Skyscanner',
    url: `https://www.skyscanner.net/transport/flights/${res.outOrigin}/${
      res.outDestination
    }/${transformDate(outDate)}/${transformDate(inDate)}?currency=EUR`
  };
  const google = {
    displayName: 'Google Flights',
    url: `https://www.google.com/flights#flt=${res.outOrigin}.${
      res.outDestination
    }.${outDate}*${res.outDestination}.${
      res.outOrigin
    }.${inDate};c:EUR;e:1;sd:1;t:f`
  };
  if (keepOriginal) return [original, momondo, kayak, skyscanner, google];
  if (!keepOriginal) return [momondo, kayak, skyscanner, google];
}
