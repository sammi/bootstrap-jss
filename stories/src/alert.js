import React from 'react'
import { storiesOf } from '@storybook/react'
import { Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'
import _ from 'lodash'

const { alert, alertLink, alertThemeColors } = Classes.Alert
const { close, buttonClose } = Classes.Close
const themeColors = alertThemeColors()

const styles = theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  close: {
    ...close,
    ...buttonClose,
    ...themeColors[theme.color],
  },
  alertLink: {
    ...alertLink,
    ...themeColors[theme.color],
  },
  alert: {
    ...alert,
    ...themeColors[theme.color],
  }
})

const Alert = injectSheet(styles)(({ children, classes }) => (
  <div className={classes.alert}>{children}</div>)
)

const AlertDismissing = injectSheet(styles)(({ classes }) => (
  <div className={classes.alert}>
    A simple primary alert with a example <a href="#" className={classes.alertLink}>link</a>
    <button type="button" className={classes.close}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
))

storiesOf('Alert', module)
  .add('Theme colors', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <Alert>{themeColorName}</Alert>
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('Dismissing', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <AlertDismissing />
          </ThemeProvider>
        ))
      }
    </div>
  )