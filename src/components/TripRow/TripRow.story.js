import React from 'react';
import { storiesOf } from '@storybook/react';
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
  matchingDeals: []
};

storiesOf('TripRow', module).add('default', () => (
  <MemoryRouter>
    <TripRow {...trip} />
  </MemoryRouter>
));
