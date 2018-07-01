import React from 'react';
import { storiesOf } from '@storybook/react';
import SubHeadline from '.';

storiesOf('SubHeadline', module).add('default', () => (
  <SubHeadline>Subheadline</SubHeadline>
));
storiesOf('SubHeadline', module).add('with bar', () => (
  <SubHeadline withBar>Subheadline</SubHeadline>
));
