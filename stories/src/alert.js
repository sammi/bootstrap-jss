import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet from 'react-jss'

const {alert, alertHeading, alertThemeColors} = Bootstrap.Classes.Alert

const themeColors = alertThemeColors()

const styles = {
  alert: {
    ...alert,
    ...themeColors.alertPrimary
  }
}

const Alert = injectSheet(styles)(
  ( {classes, children} ) => (<div className={classes.alert}>{children}</div>)
)

storiesOf('Alert', module)
  .add('Alert primary', () => (
    <Alert>This is a primary alert — check it out!</Alert>
  ))
