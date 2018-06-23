import React from 'react';
import renderer from 'react-test-renderer';
import Impressum from 'Impressum.js';

it('Impressum: default', () => {
  const component = renderer.create(<Impressum />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
