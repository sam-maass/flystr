import renderer from 'react-test-renderer';
import React from 'react';
import ImageHeader from '.';

it('ImageHeader: default', () => {
  const component = renderer.create(<ImageHeader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
