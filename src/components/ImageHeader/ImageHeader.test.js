import renderer from 'react-test-renderer';
import React from 'react';
import ImageHeader from '.';
import { MemoryRouter } from 'react-router';

it('ImageHeader: default', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ImageHeader />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
