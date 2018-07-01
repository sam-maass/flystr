import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';
import { MemoryRouter } from 'react-router';

it('Footer: default', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
