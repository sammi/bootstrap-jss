import React from 'react'
import { connect } from 'react-redux'

import { Alert } from './components/Alert'
import { close } from '../actions/alert'

export default connect(
  state => ({}),
  dispatch => ({
    close: message => dispatch(close(message))
  })
)(Alert)
