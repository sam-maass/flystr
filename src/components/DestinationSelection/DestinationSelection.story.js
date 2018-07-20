import React from 'react';
import { storiesOf } from '@storybook/react';
import DestinationSelection from '.';

const props = {
  values: {
    destinations: []
  }
};

storiesOf('DestinationSelection', module).add('default', () => (
  <DestinationSelection {...props} />
));
