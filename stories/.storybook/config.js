import { configure } from '@storybook/react'

function loadStories() {
  require('../src/alert.js')
}

configure(loadStories, module)
