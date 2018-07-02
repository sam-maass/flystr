import '../components/BetaSignupForm/BetaSignupForm.story';
import '../components/DealCardGrid/DealCardGrid.story';
import '../components/DealCard/DealCard.story';
import '../components/StepsGrid/StepsGrid.story';
import '../components/FlowText/FlowText.story';
import '../components/StepContainer/StepContainer.story';
import '../components/HugeHeadline/HugeHeadline.story';
import '../components/ImageHeader/ImageHeader.story';
import '../components/SubHeadline/SubHeadline.story';
import '../components/LogoContainer/LogoContainer.story';
import '../components/LoggedOutAppBar/LoggedOutAppBar.story';
import '../components/Footer/footer.story';
import React from 'react';
import '../injectGlobalStyles';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
