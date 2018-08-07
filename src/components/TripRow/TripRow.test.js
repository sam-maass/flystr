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
  matchingFlights: []
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
