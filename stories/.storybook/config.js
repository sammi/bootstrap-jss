import { configure } from '@storybook/react'

function loadStories() {
  require('../src/reboot.js')
  require('../src/alert.js')
  require('../src/badge.js')
}

configure(loadStories, module)
