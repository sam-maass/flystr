import renderer from 'react-test-renderer';
import React from 'react';
import FlowText from '.';

it('FlowText: default', () => {
  const component = renderer.create(<FlowText>Some random text</FlowText>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
