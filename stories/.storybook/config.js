import { configure } from '@storybook/react'

function loadStories() {
  require('../src/buttongroups.js')
}

configure(loadStories, module)
