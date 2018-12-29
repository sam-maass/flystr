import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../../store';
import AdminUsersPage from './AdminUsersPage';

it('shallow renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<AdminUsersPage store={store} />);
  expect(result).toMatchSnapshot();
});
