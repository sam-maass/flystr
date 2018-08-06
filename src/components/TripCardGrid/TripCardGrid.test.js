import renderer from 'react-test-renderer';
import React from 'react';
import TripCardGrid from '.';

it('TripCardGrid: default', () => {
  const component = renderer.create(<TripCardGrid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
