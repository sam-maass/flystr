import renderer from 'react-test-renderer';
import React from 'react';
import ImageHeader from '.';
jest.mock('../../images/landing.jpg', () => '/images/landing.jpg');
jest.mock('../../images/logo3.png', () => '/images/logo3.png');

it('ImageHeader: default', () => {
  const component = renderer.create(<ImageHeader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
