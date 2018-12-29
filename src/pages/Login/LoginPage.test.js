import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import LoginPage from './LoginPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<LoginPage store={store} />);
  expect(result).toMatchSnapshot();
});
