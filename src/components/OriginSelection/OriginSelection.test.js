import renderer from 'react-test-renderer';
import React from 'react';
import OriginSelection from '.';

it('OriginSelection: default', () => {
  const component = renderer.create(<OriginSelection />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
