import renderer from 'react-test-renderer';
import React from 'react';
import BetaSignupForm from '.';
jest.mock('../../settings', () => {
  {
    ('api');
  }
});

it('BetaSignupForm: default', () => {
  const component = renderer.create(<BetaSignupForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
