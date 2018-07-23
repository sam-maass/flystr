import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import PreferenceSelection from '.';

const props = {
  values: {},
  setFieldValue: () => {},
  handleSubmit: () => {}
};

it('PreferenceSelection: default', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<PreferenceSelection {...props} />);
  expect(result).toMatchSnapshot();
});
