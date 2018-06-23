---
to: src/pages/<%= name %>.test.js
---
<% const comp = h.inflection.undasherize(name) %>import React from 'react'
import renderer from 'react-test-renderer'
import <%= comp %> from '<%= name %>.js'

it('<%= comp %>: default', () => {
  const component = renderer.create(<<%= comp %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
