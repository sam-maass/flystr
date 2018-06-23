---
inject: true
to: src/pages/index.js
after: export {
skip_if: <%= name %>.js
---
<%= name %>
