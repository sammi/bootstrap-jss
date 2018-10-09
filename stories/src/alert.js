import React from 'react'
import { storiesOf } from '@storybook/react'
import { Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

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
    width: '20rem'
  },
  alert: {
    ...alert,
    ...themeColors[theme.color],
    width: '20rem'
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
  .add('theme', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <Alert>Something happened, please check it out!</Alert>
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('close', () =>
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