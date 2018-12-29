import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import LandingPage from './LandingPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<LandingPage store={store} />);
  expect(result).toMatchSnapshot();
});
