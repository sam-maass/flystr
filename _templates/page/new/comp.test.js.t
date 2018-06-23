---
to: src/pages/<%= name %>.test.js
---
import renderer from 'react-test-renderer'
import <%= name %> from '<%= name %>.js'

it('<%= name %>: default', () => {
  const component = renderer.create(<<%= name %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
