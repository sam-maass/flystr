---
inject: true
to: src/pages/index.js
before: import
skip_if: <%= name %>.js
---
import <%= name %> from './<%= name %>.js'
