import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '.';
import { MemoryRouter } from 'react-router';

storiesOf('Footer', module).add('default', () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
));
