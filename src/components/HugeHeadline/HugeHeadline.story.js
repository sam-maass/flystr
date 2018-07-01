import React from 'react';
import { storiesOf } from '@storybook/react';
import HugeHeadline from '.';

storiesOf('HugeHeadline', module).add('default', () => (
  <HugeHeadline>I am a huge headline</HugeHeadline>
));
storiesOf('HugeHeadline', module).add('with bar', () => (
  <HugeHeadline withBar>I am a huge headline</HugeHeadline>
));
