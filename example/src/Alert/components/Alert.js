import React from 'react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet from 'react-jss'
import classnames from 'classnames'

const {alert, alertThemeColors} = Bootstrap.Classes.Alert

const styles = {
  alert: alert,
  alertPrimary: alertThemeColors()['alertPrimary']
}

export const Alert = injectSheet(styles)(({classes, children}) =>
  <div className={classnames(classes.alert, classes.alertPrimary)} role="alert">
    {children}
  </div>
)
