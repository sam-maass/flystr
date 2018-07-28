import ShallowRenderer from 'react-test-renderer/shallow';
import AdminTrips from './AdminTrips.js';
import React from 'react';
import store from '../store';

it('AdminTrips: default', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<AdminTrips store={store} />);
  expect(result).toMatchSnapshot();
});
