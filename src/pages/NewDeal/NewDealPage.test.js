import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import Page from './NewDealPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Page store={store} />);
  expect(result).toMatchSnapshot();
});
