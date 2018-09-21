import moment from 'moment';

const transformDate = date => moment(date, 'YYYY-MM-DD').format('YYMMDD');

export function createOtaLinks(res, originalLink) {
  const original = { displayName: 'original', url: originalLink };
  const momondo = {
    displayName: 'momondo',
    url: `https://momondo.de/flight-search/${res.outOrigin}-${
      res.outDestination
    }/${res.outDate}/${res.inDate}`
  };
  const kayak = {
    displayName: 'kayak',
    url: `https://kayak.de/flights/${res.outOrigin}-${res.outDestination}/${
      res.outDate
    }/${res.inDate}`
  };
  const skyscanner = {
    displayName: 'skyscanner',
    url: `https://www.skyscanner.net/transport/flights/${res.outOrigin}/${
      res.outDestination
    }/${transformDate(res.outDate)}/${transformDate(res.inDate)}?currency=EUR`
  };
  return [original, momondo, kayak, skyscanner];
}
