import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'
import _ from 'lodash'
import classNames from 'classnames'

const { alert, alertHeading, alertLink, alertDismissible, alertThemeColors } = Classes.Alert
const { close, buttonClose } = Classes.Close
const { fade } = Classes.Transitions

const themeColors = alertThemeColors()

const styles = theme => ({
  alert: {
    ...Reboot,
    ...alert,
    ...themeColors[theme.color],
  },
  alertLink: {
    ...Reboot,
    ...themeColors[theme.color],
    ...alertLink,
  },
  alertHeading: {
    ...Reboot,
    ...themeColors[theme.color],
    ...alertHeading,
  },
  alertDismissible: {
    ...Reboot,
    ...alert,
    ...themeColors[theme.color],
    ...alertDismissible,
    ...fade,
  },
  close: {
    ...Reboot,
    ...alert,
    ...themeColors[theme.color],
    ...close,
    ...buttonClose,
    ...alertDismissible.close,
  }
})

const AlertHeading = injectSheet(styles)(({ classes, children }) => (
  <h1 className={classes.alertHeading}>{children}</h1>
))

const AlertLink = injectSheet(styles)(({ classes, children }) => (
  <a href='/' className={classes.alertLink}>{children}</a>
))

const AlertDismissing = injectSheet(styles)(({ classes, show, onClose, children }) => (
  <div className={classNames(classes.alertDismissible, 'show')} role="alert">
    {children}
    <button type="button" className={classes.close} data-dismiss="alert" aria-label="Close" onClick={onClose}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
))

const Alert = injectSheet(styles)(({ themeKey, children, classes }) => (
  <div className={classes.alert}>{children}</div>)
)

storiesOf('Alert', module)
  .add('Theme colors', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <Alert themeKey={_.replace(themeColorName, 'alert', '')}>
              <AlertHeading>{themeColorName}</AlertHeading>
              This is a {_.toLower(_.replace(themeColorName, 'alert', ''))} <AlertLink>alert</AlertLink> — check it out!
            </Alert>
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
            <AlertDismissing show={true} onClose={() => { }}>
              <strong>{themeColorName}</strong> You should check in on some of those fields below.
            </AlertDismissing>
          </ThemeProvider>
        ))
      }
    </div>
  )
