import React from 'react';
import renderer from 'react-test-renderer';
import LoggedOutAppBar from '.';
import { MemoryRouter } from 'react-router';

it('LoggedOutAppBar: default', () => {
  const component = renderer.create(
    <MemoryRouter>
      <LoggedOutAppBar />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
