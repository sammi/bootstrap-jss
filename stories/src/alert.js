import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet, { jss, ThemeProvider } from 'react-jss'
import _ from 'lodash'

const {alert, alertHeading, alertThemeColors} = Bootstrap.Classes.Alert

const themeColors = alertThemeColors()

const styles = theme => ({
  alert: {
    ...alert,
    ...themeColors[theme.color]
  }
})

const Alert = injectSheet(styles)(( {classes, children} ) => (<div className={classes.alert}>{children}</div>))

storiesOf('Alert', module)
  .add('Alert colors', () => (
    <div>
    {
      Object.keys(themeColors).map( themeColorName => (
        <ThemeProvider key = {themeColorName} theme={{color: themeColorName}}>
          <Alert>This is a {_.replace(themeColorName, 'alert', '')} alert — check it out!</Alert>
        </ThemeProvider>
      ))
    }
    </div>
  ))
