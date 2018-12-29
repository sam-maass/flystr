import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import DealsPage from './DealsPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<DealsPage store={store} />);
  expect(result).toMatchSnapshot();
});
