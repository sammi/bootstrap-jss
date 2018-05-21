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

const Alert = injectSheet(styles)(({ classes, themeKey, children }) => (
  <div className={classes.alert}>
    <h1 className={classes.alertHeading}>{themeKey}</h1>
    <p>Aww yeah, you successfully read this important alert message. This example text is going
    to run a bit longer so that you can see how spacing within an alert works with this kind
    of content.</p>
    {children} <a href='#' className={classes.alertLink}>link match to the theme</a>
  </div>)
)

storiesOf('Alert', module)
  .add('Theme colors', () => (
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <Alert themeKey={_.replace(themeColorName, 'alert', '')}>This is a {_.toLower(_.replace(themeColorName, 'alert', ''))} alert — check it out!</Alert>
          </ThemeProvider>
        ))
      }
    </div>
  ))
