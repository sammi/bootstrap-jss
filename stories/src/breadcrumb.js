import React from 'react'
import { storiesOf } from '@storybook/react'
import injectSheet from 'react-jss'
import { Functions, Classes } from 'bootstrap-jss'

var { breadcrumb, breadcrumbItem } = Classes.Breadcrumb
const { quote } = Functions

breadcrumbItem['& + &']["&::before"].content = quote('>')

const Breadcrumb = injectSheet({ breadcrumb, breadcrumbItem })(({ classes }) => (
  <div>
    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}>Home</li>
      </ol>
    </nav>

    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}><a href="#">Home</a></li>
        <li className={classes.breadcrumbItem}>Library</li>
      </ol>
    </nav>

    <nav>
      <ol className={classes.breadcrumb}>
        <li className={classes.breadcrumbItem}><a href="#">Home</a></li>
        <li className={classes.breadcrumbItem}><a href="#">Library</a></li>
        <li className={classes.breadcrumbItem}>Data</li>
      </ol>
    </nav>
  </div>
))

storiesOf('Breadcrumb', module)
  .add('breadcrumb', () => <Breadcrumb />)
