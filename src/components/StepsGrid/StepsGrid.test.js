import renderer from 'react-test-renderer';
import React from 'react';
import StepsGrid from '.';

it('StepsGrid: default', () => {
  const component = renderer.create(<StepsGrid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
