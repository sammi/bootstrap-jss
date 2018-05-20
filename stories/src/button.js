import React from 'react'
import { storiesOf } from '@storybook/react'

const noop = () => {}

storiesOf('Button', module)
  .add('with text', () => (
    <button>test button</button>
  ))
  .add('click me', () => (
    <button onClick={noop}>click me</button>
  ))
