import renderer from 'react-test-renderer';
import React from 'react';
import SubHeadline from '.';

it('SubHeadline: default', () => {
  const component = renderer.create(<SubHeadline />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
