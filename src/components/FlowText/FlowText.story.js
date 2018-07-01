import React from 'react';
import { storiesOf } from '@storybook/react';
import FlowText from '.';

storiesOf('FlowText', module).add('default', () => (
  <FlowText>Some random text</FlowText>
));
