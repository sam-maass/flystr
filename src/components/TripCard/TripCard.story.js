import React from 'react';
import { storiesOf } from '@storybook/react';
import TripCard from '.';

storiesOf('TripCard', module).add('default', () => (
  <TripCard
    destinations={['NYC']}
    title="USA"
    dates="June 2019"
    duration="16 Days"
    oldPrice="700 EUR"
    newPrice="400 EUR"
  />
));
