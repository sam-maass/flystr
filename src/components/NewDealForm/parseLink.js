export const parseLink = link => {
  const isSkyscanner = /www.skyscanner./;
  const isGoogleFlights = /google..*\/flights/;
  let linkParams = {};
  switch (true) {
    case isSkyscanner.test(link):
      linkParams = parseSkyscannerLink(link);
      break;
    case isGoogleFlights.test(link):
      linkParams = parseGoogleLink(link);
      break;

    default:
      break;
  }
  return linkParams;
};

const parseSkyscannerLink = link => {
  const skyscannerRegex = /\/(\w{3})\/(.*)\/(\w{3})\/(\w{3})\/(.*)\/(\w{3})/;
  const res = skyscannerRegex.exec(link);
  const [, outDep, outDate, outArr, inDep, inDate, inArr] = res;
  return {
    link,
    outDep,
    outDate,
    outArr,
    inDep,
    inDate,
    inArr,
    linkSource: 'Skyscanner'
  };
};

const parseGoogleLink = link => {
  const googleRegex = /flt=[a-z]?(\w{3}).(\w{3}).(.*)\*(\w{3}).[a-z]?(\w{3}).(.*);c/;
  const res = googleRegex.exec(link);
  const [, outDep, outArr, outDate, inDep, inArr, inDate] = res;
  return {
    link,
    outDep,
    outDate,
    outArr,
    inDep,
    inDate,
    inArr,
    linkSource: 'Google'
  };
};
