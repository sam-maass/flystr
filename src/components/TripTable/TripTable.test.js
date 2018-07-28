import renderer from 'react-test-renderer';
import React from 'react';
import TripTable from '.';

it('TripTable: default', () => {
  const component = renderer.create(<TripTable trips={[]} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
