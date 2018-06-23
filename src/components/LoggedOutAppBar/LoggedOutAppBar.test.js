import React from 'react';
import renderer from 'react-test-renderer';
import LoggedOutAppBar from '.';

it('LoggedOutAppBar: default', () => {
  const component = renderer.create(<LoggedOutAppBar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
