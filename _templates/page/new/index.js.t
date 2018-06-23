---
to: src/pages/<%= name %>.js
---
<% if(locals.stateful) { -%>
import React, { Component } from 'react'
class <%= name %> extends Component {
  render() {
    return <div>edit me: at components/<%= name %>/index.js</div>
  }
}
<% } else if(locals.functional) { -%>
import React from 'react'
const <%= name %> = props => <div>edit me: at components/<%= name %>/index.js</div>
<% } else { -%>
import React, { PureComponent } from 'react'
class <%= name %> extends PureComponent {
  render() {
    return <div>edit me: at components/<%= name %>/index.js</div>
  }
}
<% } -%>

export default <%= name %>
