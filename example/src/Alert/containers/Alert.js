import React from 'react'
import { connect } from 'react-redux'

import { Alert } from './components/Alert'
import { close } from '../actions/alert'

const {alert, alertThemeColors} = Bootstrap.Classes.Alert

export default connect(
  state => ({}),
  dispatch => ({
    close: message => dispatch(close(message))
  })
)(
  <div>
    {
      alertThemeColors().map( themeColor => <Alert alert themeColor>Hi Alert Message</Alert>)
    }
  </div>
)
