import React from 'react';
import renderer from 'react-test-renderer';
import LogoContainer from '.';

it('LogoContainer: default', () => {
  const component = renderer.create(<LogoContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
