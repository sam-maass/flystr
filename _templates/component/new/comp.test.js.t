---
to: src/components/<%= name %>/<%= name %>.test.js
---
import renderer from 'react-test-renderer'
import React from 'react'
import <%= name %> from '.'

it('<%= name %>: default', () => {
  const component = renderer.create(<<%= name %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
