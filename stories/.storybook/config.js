import { configure } from '@storybook/react'

function loadStories() {
  require('../src/button.js')
}

configure(loadStories, module)
