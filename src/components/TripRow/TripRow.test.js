import renderer from 'react-test-renderer';
import React from 'react';
import TripRow from '.';
import { MemoryRouter } from 'react-router';

const trip = {
  _id: '1234',
  classes: {},
  startDate: '2018-07-15T00:00:00.000Z',
  endDate: '2018-08-12T00:00:00.000Z',
  name: 'Test',
  budget: 200,
  destinations: ['BRE', 'SEZ'],
  origins: ['DUS', 'FRA', 'BRU'],
  matchingFlights: [
    {
      inOriginDetails: {
        name: 'All Airports',
        city: 'New York',
        country: 'United States',
        iata: 'NYC'
      },
      inDestinationDetails: {
        name: 'Inverness',
        city: 'Inverness',
        country: 'United Kingdom',
        iata: 'INV'
      },
      outOriginDetails: {
        name: 'Inverness',
        city: 'Inverness',
        country: 'United Kingdom',
        iata: 'INV'
      },
      outDestinationDetails: {
        name: 'All Airports',
        city: 'New York',
        country: 'United States',
        iata: 'NYC'
      },
      _id: '5b9feaf9ce8b3627d31fa258',
      link:
        'https://www.skyscanner.net/transport/d/INV/2019-01-13/NYCA/NYCA/2019-01-23/INV/',
      outOrigin: 'INV',
      outDate: '2019-01-13T00:00:00.000Z',
      outDestination: 'NYC',
      inOrigin: 'NYC',
      inDate: '2019-01-23T00:00:00.000Z',
      inDestination: 'INV',
      price: 283,
      currency: 'GBP',
      duration: 10,
      __v: 0,
      createdAt: '2018-09-17T17:57:13.612Z',
      updatedAt: '2018-09-17T18:29:03.845Z'
    }
  ]
};

it('Triprow: default', () => {
  const component = renderer.create(
    <MemoryRouter>
      <TripRow {...trip} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
