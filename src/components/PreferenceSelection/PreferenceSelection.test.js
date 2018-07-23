import renderer from 'react-test-renderer';
import React from 'react';
import PreferenceSelection from '.';

it('PreferenceSelection: default', () => {
  const component = renderer.create(<PreferenceSelection />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
