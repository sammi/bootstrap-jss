import React from 'react'
import { storiesOf } from '@storybook/react'
import injectSheet from 'react-jss'
import { Reboot, Functions, Classes } from 'bootstrap-jss'

const { breadcrumb, breadcrumbItem } = Classes.Breadcrumb
const { quote } = Functions

breadcrumbItem['& + &']['&::before'].content = quote('/')

const styles = {
  active: {},
  breadcrumb: {
    ...breadcrumb,
    '& a': {
      ...Reboot.links.a
    }
  },
  breadcrumbItem: {
    ...breadcrumbItem
  }
}

const Breadcrumb = injectSheet(styles)(({ classes }) => (
  <div>
    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}>Home</li>
      </ol>
    </nav>

    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}><a href='#'>Home</a></li>
        <li className={classes.breadcrumbItem}>Library</li>
      </ol>
    </nav>

    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}><a href='#'>Home</a></li>
        <li className={classes.breadcrumbItem}><a href='#'>Library</a></li>
        <li className={classes.breadcrumbItem}>Data</li>
      </ol>
    </nav>
  </div>
))

storiesOf('Breadcrumb', module)
  .add('breadcrumb', () => <Breadcrumb />)
