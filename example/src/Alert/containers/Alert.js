import React from 'react'
import * as Bootstrap from 'bootstrap-jss'

import { Alert } from '../components/Alert'

const {alert, alertThemeColors} = Bootstrap.Classes.Alert

const colors = Object.keys(alertThemeColors())

export default () => <div>
{
  colors.map( (themeColor) => <Alert alert themeColor>Hi Alert Message</Alert>)
}
</div>
