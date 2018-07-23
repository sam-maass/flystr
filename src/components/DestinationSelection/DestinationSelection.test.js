import React from 'react';
import DestinationSelection from '.';
import ShallowRenderer from 'react-test-renderer/shallow';

const props = {
  values: {
    destinations: []
  },
  touched: {},
  errors: {},
  setFieldValue: () => {},
  setTouched: () => {},
  validateForm: () => {}
};

it('DestinationSelection: default', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<DestinationSelection {...props} />);
  expect(result).toMatchSnapshot();
});
