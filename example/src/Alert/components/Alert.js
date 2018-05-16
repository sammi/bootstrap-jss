import React from 'react'
import classnames from 'classnames'

export const Alert = (({alert, themeColor, children}) =>
  <div className={classnames(alert, themeColor)} role="alert">
    {children}
  </div>
)
