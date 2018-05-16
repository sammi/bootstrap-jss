import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Button', module)
  .add('with text', () => (
    <button>test button</button>
  ))
  .add('click me', () => (
    <button onClick='click me'>click me</button>
  ))
