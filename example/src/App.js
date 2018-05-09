import React from 'react'

import {Variables} from 'bootstrap-jss'
import injectSheet from 'react-jss'

const {primary, white} = Variables.Colors

const styles = {
    alert: {
        color: primary,
        backgroundColor: white
    }
}

const JSSButton = injectSheet(styles)( ({classes, children}) => <button className={classes.button}>{children}</button>)

export default () => 
  <div>
    <JSSButton>Jss Button</JSSButton>
  </div>
