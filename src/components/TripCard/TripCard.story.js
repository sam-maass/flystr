import React from 'react';
import { storiesOf } from '@storybook/react';
import TripCard from '.';
import { getAirportImage } from '../../getAirportImage';

storiesOf('TripCard', module).add('default', () => (
  <TripCard
    image={getAirportImage('NYC')}
    title="USA"
    dates="June 2019"
    duration="16 Days"
    oldPrice="700 EUR"
    newPrice="400 EUR"
  />
));
