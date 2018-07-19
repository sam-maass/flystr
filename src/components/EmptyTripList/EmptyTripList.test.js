import renderer from 'react-test-renderer';
import React from 'react';
import EmptyTripList from '.';

it('EmptyTripList: default', () => {
  const component = renderer.create(<EmptyTripList />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
