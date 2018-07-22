import renderer from 'react-test-renderer';
import React from 'react';
import DateSelection from '.';

it('DateSelection: default', () => {
  const component = renderer.create(<DateSelection />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
