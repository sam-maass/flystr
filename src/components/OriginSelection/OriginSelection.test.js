import renderer from 'react-test-renderer';
import React from 'react';
import OriginSelection from '.';

const props = {
  values: {
    origins: []
  },
  touched: {},
  errors: {},
  setFieldValue: () => {},
  setTouched: () => {},
  validateForm: () => {}
};

it('OriginSelection: default', () => {
  const component = renderer.create(<OriginSelection {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
