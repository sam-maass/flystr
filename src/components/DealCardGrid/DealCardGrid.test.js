import renderer from 'react-test-renderer';
import React from 'react';
import DealCardGrid from '.';

it('DealCardGrid: default', () => {
  const component = renderer.create(<DealCardGrid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
