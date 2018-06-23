import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import LoggedOutAppBar from '.';

storiesOf('LoggedOutAppBar', module).add('default', () => (
  <MemoryRouter>
    <LoggedOutAppBar />
  </MemoryRouter>
));
