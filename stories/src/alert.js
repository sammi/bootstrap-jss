import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet, { jss, ThemeProvider } from 'react-jss'
import _ from 'lodash'

const { alert, alertHeading, alertLink, alertThemeColors } = Bootstrap.Classes.Alert

const themeColors = alertThemeColors()

const styles = theme => ({
  alert: {
    ...alert,
    ...themeColors[theme.color]
  },
  alertLink: {
    ...themeColors[theme.color],
    ...alertLink
  },
  alertHeading: {
    ...themeColors[theme.color],
    ...alertHeading
  }
})

const AlertHeading = injectSheet(styles)(({ classes, children }) => (
  <h1 className={classes.alertHeading}>{children}</h1>
))

const AlertLink = injectSheet(styles)(({ classes, children }) => (
  <a href='/' className={classes.alertLink}>{children}</a>
))

const Alert = injectSheet(styles)(({ themeKey, children, classes }) => (
  <div className={classes.alert}>{children}</div>)
)

storiesOf('Alert', module)
  .add('Theme colors', () => (
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
  ))
