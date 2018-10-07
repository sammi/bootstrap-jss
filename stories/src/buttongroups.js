import React from 'react'
import { storiesOf } from '@storybook/react'
import { Classes, Utilities, Reboot } from 'bootstrap-jss'
import injectSheet, { jss } from 'react-jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const { btn, btnThemeColors } = Classes.Buttons
const { btnGroup, btnToolbar, btnDropdownToggle } = Classes.ButtonGroup
const { dropdownItem, dropdownMenu } = Classes.Dropdown
const { spacing } = Utilities.Spacing

const btnColors = btnThemeColors()

const styles = {
  btnGroup: {
    ...Reboot,
    ...btnGroup,
    ...spacing['mr-2']
  },
  btnToolbar: {
    ...Reboot,
    ...btnToolbar,
    ...spacing['mb-3']
  },
  btn: {
    ...Reboot,
    ...btn,
    ...btnColors['btnPrimary']
  },
  btnLeft: {
    ...Reboot,
    ...btn,
    ...btnColors['btnPrimary']
  },
  btnMiddle: {
    ...Reboot,
    ...btn,
    ...btnColors['btnPrimary']
  },
  btnRight: {
    ...Reboot,
    ...btn,
    ...btnColors['btnPrimary']
  },
  btnDropdownToggle: {
    ...Reboot,
    ...btn,
    ...btnDropdownToggle
  },
  dropdownItem: {
    ...Reboot,
    ...dropdownItem(),
    ...btnColors['btnSeconday']
  },
  dropdownMenu: {
    ...Reboot,
    ...dropdownMenu,
    ...btnColors['btnSeconday']
  }
}

const sheet = jss.createStyleSheet(styles)

console.log(sheet.toString())

const BasicButtonGroup = injectSheet(styles)(({ classes }) =>
  <div className={classes.btnGroup}>
    <button type="button" className={classes.btnLeft}>Left</button>
    <button type="button" className={classes.btnMiddle}>Middle</button>
    <button type="button" className={classes.btnRight}>Right</button>
  </div>
)

const ToolbarButtonGroup = injectSheet(styles)(({ classes }) =>
  <div className={classes.btnToolbar}>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.btn}>1</button>
      <button type="button" className={classes.btn}>2</button>
      <button type="button" className={classes.btn}>3</button>
      <button type="button" className={classes.btn}>4</button>
    </div>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.btn}>5</button>
      <button type="button" className={classes.btn}>6</button>
      <button type="button" className={classes.btn}>7</button>
    </div>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.btn}>8</button>
    </div>
  </div>
)

const NestingButtongGroup = injectSheet(styles) ( ({classes}) =>
  <div className={classes.btnGroup}>
    <button type="button" className={classes.btn}>1</button>
    <button type="button" className={classes.btn}>2</button>

    <div className={classes.btnGroup} role="group">
      <button type="button" className={classes.btnDropdownToggle}>
        Dropdown
      </button>
      <div className={classes.dropdownMenu}>
        <a className={classes.dropdownItem} href="#">Dropdown link</a>
        <a className={classes.dropdownItem} href="#">Dropdown link</a>
      </div>
    </div>
  </div>
)

storiesOf('Button Groups', module)
  .add('Basic example', () => <BasicButtonGroup />)
  .add('Button Toolbar', () => <ToolbarButtonGroup />)
  .add('Nesting', () => <NestingButtongGroup />)
