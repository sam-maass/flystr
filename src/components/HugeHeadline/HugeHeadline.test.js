import renderer from 'react-test-renderer';
import React from 'react';
import HugeHeadline from '.';

it('HugeHeadline: default', () => {
  const component = renderer.create(<HugeHeadline />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
