import React from 'react';
import { storiesOf } from '@storybook/react';
import worldIcon from '../../images/world.svg';
import StepContainer from '.';

storiesOf('StepContainer', module).add('default', () => (
  <StepContainer
    icon={worldIcon}
    title={
      <span>
        select<br /> destinations & dates
      </span>
    }
    text="Select your favorite destinations, add travel periods and budget. Looking for a flight to New York in October and to Japan in April or May? We've got you covered!"
  />
));
