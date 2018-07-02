import Landing from './Landing';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

it('Matches snapshot', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Landing />);
  expect(result).toMatchSnapshot();
});
