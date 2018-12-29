import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import DealPage from './DealPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<DealPage store={store} />);
  expect(result).toMatchSnapshot();
});
