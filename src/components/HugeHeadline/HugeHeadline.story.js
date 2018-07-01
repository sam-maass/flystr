import React from 'react';
import { storiesOf } from '@storybook/react';
import HugeHeadline from '.';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

storiesOf('HugeHeadline', module).add('default', () => (
  <HugeHeadline title="I'm a huge headline" />
));
storiesOf('HugeHeadline', module).add('with bar', () => (
  <HugeHeadline title="I'm a huge headline" withBar />
));
