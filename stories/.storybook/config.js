import { configure } from '@storybook/react'

function loadStories() {
  require('../src/reboot.js')
  require('../src/alert.js')
  require('../src/badge.js')
  require('../src/breadcrumb.js')
  require('../src/buttons.js')
  require('../src/buttongroups.js')
}

configure(loadStories, module)
