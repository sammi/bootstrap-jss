import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'
const { btn } = Classes.Buttons
const { btnGroup, btnGroupToggle} = Classes.ButtonGroup
const { btnThemeColors } = Classes.Buttons
const themeColors = btnThemeColors()

const styles = theme => ({
  btn,
  btnGroup,
  btnGroupToggle,
  btnLink: {},
  dropdownToggle: {},
  reboot: {
    ...Reboot.forms
  },
  themeColor: {
    ...themeColors[theme.color],
    borderRadius: 0
  },
  active: {},
  disabled: {},
  show: {},
  focus: {},
  btnContainer: {
    composes: ['$reboot', '$btnGroup', '$btnGroupToggle'],
    display: 'block',
    margin: '0.25rem'
  },
  btnActivethemeColor: {
    composes: ['$btn', '$themeColor', '$active']
  },
  btnThemeColor: {
    composes: ['$btn', '$themeColor']
  }
})

const BasicButtonGroup = injectSheet(styles)(({ classes }) =>
  <div className={classes.btnContainer} >
    <label className={classes.btnActivethemeColor}>
      <input type="radio" name="options" id="option1" /> checked
    </label>

    <label className={classes.btnThemeColor}>
        <input type="radio" name="options" id="option2"/> Radio
    </label>

    <label className={classes.btnThemeColor}>
      <input type="radio" name="options" id="option3"/> Radio
    </label>
  </div>
)

storiesOf('Button Groups', module)
  .add('Basic example', () => 
  <div>
    {
      Object.keys(themeColors).map(themeColorName => (
        <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <BasicButtonGroup />
        </ThemeProvider>
      ))
    }
  </div>
  )
