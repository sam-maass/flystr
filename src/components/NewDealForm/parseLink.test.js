import { parseLink } from './parseLink';

const linksIgnored = [
  'https://www.urlaubspiraten.de/buchen/flug#/flights/BER-DPS/2019-04-01/2019-04-11/2adults',
  'https://www.momondo.co.uk/flight-search/MAN-DBV/2018-08-09/2018-08-23?sort=price_a&end_pid=20075&source=aff-tt&utm_source=tradetracker&utm_medium=affiliate&utm_campaign=265069&utm_content=20075&utm_term=12%3A%3A265069%3A%3A%3A%3A%3A%3A1533376408',
  'https://wizzair.com/en-gb#/booking/select-flight/RIX/KUT/2018-11-11/2018-11-21/1/0/0',
  'http://fly4free.com/r/?http://track.webgains.com/click.html?wgcampaignid=179903&wgprogramid=8613&wgtarget=https://www.momondo.com/flight-search/PEK-ORD/2018-10-01/2018-10-21?sort=price_a',
  'http://www.exbir.de/ex/txldpsapr2019sky2',
  'https://www.momondo.ie/flight-search/SOF-JNB/2018-12-04/2018-12-11?sort=price_a',
  'https://www.kayak.ie/flights/BUD-SEL/2019-03-28/2019-04-12?sort=bestflight_a'
];

describe('Skyscanner links', () => {
  const skyscannerLinks = [
    'https://www.skyscanner.com/transport/d/MAO/2018-09-24/MIA/MIA/2018-10-04/MAO?adults=1&children=0&adultsv2=1&childrenv2&infants=0&cabinclass=economy&sortby=price&locale=en-GB&currency=USD&ref=home&market=US&associateid=API_B2B_18695_00001&utm_medium=b2b&utm_campaign=flights&utm_source=SecretFlying%20-%20REFERRALS#results',
    'https://www.skyscanner.fi/transport/d/CDG/2018-09-09/XIY/XIY/2018-09-20/CDG?adults=1&cabinclass=economy&locale=en-GB&sortby=price&currency=EUR&ref=home&associateid=API_B2B_18695_00001&utm_medium=b2b&utm_campaign=flights&utm_source=SecretFlying%20-%20REFERRALS',
    'https://www.skyscanner.com/transport/d/KWI/2018-10-24/NYCA/NYCA/2018-11-02/KWI?adults=1&children=0&adultsv2=1&childrenv2&infants=0&cabinclass=economy&sortby=price&locale=en-GB&currency=USD&ref=home&market=US&associateid=API_B2B_18695_00001&utm_medium=b2b&utm_campaign=flights&utm_source=SecretFlying%20-%20REFERRALS',
    'https://www.skyscanner.com/transport/d/JNBA/2019-02-10/GRU/GRU/2019-02-19/JNBA?adults=1&cabinclass=economy&locale=en-GB&sortby=price&currency=USD&ref=home&market=US&associateid=API_B2B_18695_00001&utm_medium=b2b&utm_campaign=flights&utm_source=SecretFlying%20-%20REFERRALS'
  ];
  it(`should parse skyscanner.com link`, () => {
    const link = skyscannerLinks[0];
    expect(parseLink(link)).toEqual({
      inArr: 'MAO',
      inDate: '2018-10-04',
      inDep: 'MIA',
      link,
      linkSource: 'skyscanner.com',
      outArr: 'MIA',
      outDate: '2018-09-24',
      outDep: 'MAO'
    });
  });

  it(`should parse skyscanner.fi link`, () => {
    const link = skyscannerLinks[1];
    expect(parseLink(link)).toEqual({
      inArr: 'CDG',
      inDate: '2018-09-20',
      inDep: 'XIY',
      link,
      linkSource: 'skyscanner.fi',
      outArr: 'XIY',
      outDate: '2018-09-09',
      outDep: 'CDG'
    });
  });

  it(`should parse link with longer IATA coder as origin`, () => {
    const link = skyscannerLinks[3];
    expect(parseLink(link)).toEqual({
      inArr: 'JNB',
      inDate: '2019-02-19',
      inDep: 'GRU',
      link,
      linkSource: 'skyscanner.com',
      outArr: 'GRU',
      outDate: '2019-02-10',
      outDep: 'JNB'
    });
  });

  it(`should parse link with longer IATA coder as destination`, () => {
    const link = skyscannerLinks[2];
    expect(parseLink(link)).toEqual({
      inArr: 'KWI',
      inDate: '2018-11-02',
      inDep: 'NYC',
      link,
      linkSource: 'skyscanner.com',
      outArr: 'NYC',
      outDate: '2018-10-24',
      outDep: 'KWI'
    });
  });
});

describe('Kayak Links', () => {
  const kayakLinks = [
    'https://www.kayak.de/flights/KBP-WRO/2018-11-20/2018-11-29/2adults?utm_source=fly4freewidget&utm_medium=affiliate&utm_term=rev&utm_campaign=deeplinks&utm_content=f_KBP_WRO_aug04&sort=bestflight_a',
    'http://fly4free.com/r/?https://www.kayak.ie/in?a=fly4free-widget&url=/flights/BUD-CHI/2019-02-19/2019-02-26&encoder=27_1&enc_pid=deeplinks&enc_eid=0&enc_lid=f_BUD_ORD_aug04&enc_cid=sample&utm_source=fly4freewidget&utm_medium=affiliate&utm_term=rev&utm_campaign=deeplinks&utm_content=f_BUD_ORD_aug04'
  ];
  it('should parse kayak link', () => {
    const link = kayakLinks[0];
    expect(parseLink(link)).toEqual({
      inArr: 'KBP',
      inDate: '2018-11-29',
      inDep: 'WRO',
      link,
      linkSource: 'kayak.de',
      outArr: 'WRO',
      outDate: '2018-11-20',
      outDep: 'KBP'
    });
  });

  it('should parse fly4free ref to kayak', () => {
    const link = kayakLinks[1];
    expect(parseLink(link)).toEqual({
      inArr: 'BUD',
      inDate: '2019-02-26',
      inDep: 'CHI',
      link,
      linkSource: 'kayak.ie',
      outArr: 'CHI',
      outDate: '2019-02-19',
      outDep: 'BUD'
    });
  });
});

describe('Google Links', () => {
  const googleLinks = [
    'https://www.google.co.uk/flights/#flt=BUD./m/0hsqf.2019-03-28*/m/0hsqf.BUD.2019-04-12;c:EUR;e:1;sd:1;t:f',
    'https://www.google.com/flights#flt=SOF.JNB.2018-12-04*JNB.SOF.2018-12-11;c:EUR;e:1;sd:1;t:f'
  ];
  it('should parse google.co.uk links', () => {
    const link = googleLinks[0];
    expect(parseLink(link)).toEqual({
      inArr: 'BUD',
      inDate: '2019-04-12',
      inDep: '/m/0hsqf',
      link,
      linkSource: 'google.co.uk',
      outArr: '/m/0hsqf',
      outDate: '2019-03-28',
      outDep: 'BUD'
    });
  });

  it('should parse google.com links', () => {
    const link = googleLinks[1];
    expect(parseLink(link)).toEqual({
      inArr: 'SOF',
      inDate: '2018-12-11',
      inDep: 'JNB',
      link,
      linkSource: 'google.com',
      outArr: 'JNB',
      outDate: '2018-12-04',
      outDep: 'SOF'
    });
  });
});
