import renderer from 'react-test-renderer';
import React from 'react';
import DealCard from '.';
import image from '../../images/NYC.jpg';

it('DealCard: default', () => {
  const component = renderer.create(
    <DealCard
      image={image}
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
