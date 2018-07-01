import React from 'react';
import { storiesOf } from '@storybook/react';
import HugeHeadline from '.';

storiesOf('HugeHeadline', module).add('default', () => (
  <HugeHeadline title="I'm a huge headline" />
));
storiesOf('HugeHeadline', module).add('with bar', () => (
  <HugeHeadline title="I'm a huge headline" withBar />
));
