import renderer from 'react-test-renderer';
import React from 'react';
import EmailForm from '.';
import store from '../../store';

it('EmailForm: default', () => {
  const component = renderer.create(<EmailForm store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
