import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'

import injectSheet from 'react-jss'

const { btn } = Classes.Buttons
const { btnGroup, btnGroupToggle} = Classes.ButtonGroup
const { btnThemeColors, btnLink } = Classes.Buttons
const { dropdownToggle } = Classes.Dropdown
const themeColors = btnThemeColors()

const styles = {
  reboot: {
    ...Reboot.forms
  },
  btn,
  btnGroup,
  btnGroupToggle,
  dropdownToggle,
  btnLink,
  active: {},
  show: {},
  secondary: {
    ...themeColors.btnSecondary
  },
  btnContainer: {
    composes: ['$reboot', '$btnGroup', '$btnGroupToggle']
  },
  btnActiveSecondary: {
    composes: ['$btn', '$secondary', '$active']
  },
  btnSecondary: {
    composes: ['$btn', '$secondary']
  }
}

const BasicButtonGroup = injectSheet(styles)(({ classes }) =>
  <div className={classes.btnContainer} >
    <label className={classes.btnActiveSecondary}>
      <input type="radio" name="options" id="option1" /> checked
    </label>

    <label className={classes.btnSecondary}>
        <input type="radio" name="options" id="option2"/> Radio
    </label>

    <label className={classes.btnSecondary}>
      <input type="radio" name="options" id="option3"/> Radio
    </label>
  </div>
)

storiesOf('Button Groups', module)
  .add('Basic example', () => <BasicButtonGroup />)
