import renderer from 'react-test-renderer';
import React from 'react';
import TripCard from '.';

it('TripCard: default', () => {
  const component = renderer.create(
    <TripCard
      destinations={['NYC']}
      title="USA"
      dates="June 2019"
      duration="16 Days"
      oldPrice="700 EUR"
      newPrice="400 EUR"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
