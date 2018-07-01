import React from 'react';
import { storiesOf } from '@storybook/react';
import SubHeadline from '.';

storiesOf('SubHeadline', module).add('default', () => (
  <SubHeadline title="Subheadline" />
));
storiesOf('SubHeadline', module).add('with bar', () => (
  <SubHeadline title="Subheadline" withBar />
));
