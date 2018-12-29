import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import LegalPage from './LegalPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<LegalPage store={store} />);
  expect(result).toMatchSnapshot();
});
