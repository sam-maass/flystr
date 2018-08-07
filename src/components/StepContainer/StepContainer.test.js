import renderer from 'react-test-renderer';
import React from 'react';
import StepContainer from '.';

it('StepContainer: default', () => {
  const component = renderer.create(
    <StepContainer
      icon={'/world.svg'}
      title={
        <span>
          select<br /> destinations & dates
        </span>
      }
      text="Select your favorite destinations, add travel periods and budget. Looking for a flight to New York in October and to Japan in April or May? We've got you covered!"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
