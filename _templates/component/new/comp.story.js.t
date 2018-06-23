---
to: src/components/<%= name %>/<%= name %>.story.js
---
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import <%= name %> from '.'

storiesOf('<%= name %>', module).add('default', () => <<%= name %> />)
