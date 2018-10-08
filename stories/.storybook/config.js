import { configure } from '@storybook/react'

function loadStories() {
  require('../src/alert')
  require('../src/badge')
  require('../src/breadcrumb')
  require('../src/button')
}

configure(loadStories, module)
