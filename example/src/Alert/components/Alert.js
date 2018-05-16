import React from 'react'
import * as Bootstrap from 'bootstrap-jss'
import classnames from 'classnames'

export const Alert = (({alert, themeColor, children}) =>
  <div className={classnames(alert, themeColor)} role="alert">
    {children}
  </div>
)
