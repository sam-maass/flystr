import React from 'react';
import { storiesOf } from '@storybook/react';
import image from '../../images/NYC.jpg';
import TripCard from '.';

storiesOf('TripCard', module).add('default', () => (
  <TripCard
    image={image}
    title="USA"
    dates="June 2019"
    duration="16 Days"
    oldPrice="700 EUR"
    newPrice="400 EUR"
  />
));
