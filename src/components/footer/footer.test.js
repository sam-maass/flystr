import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

it('Footer: default', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
