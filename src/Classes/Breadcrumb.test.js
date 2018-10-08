import {
  breadcrumbPaddingY, breadcrumbPaddingX, breadcrumbMarginBottom,
  breadcrumbBg, breadcrumbBorderRadius,
  breadcrumbItemPadding, breadcrumbDividerColor,
  breadcrumbDivider, breadcrumbActiveColor
} from '../Variables/Breadcrumbs'
import { borderRadius } from '../Mixins/borderRadius'

import { breadcrumb, breadcrumbItem } from './Breadcrumb'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('breadcrumb', () => {
  it('breadcrumb', () => {
    expect(breadcrumb).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      padding: `${breadcrumbPaddingY} ${breadcrumbPaddingX}`,
      marginBottom: breadcrumbMarginBottom,
      listStyle: 'none',
      backgroundColor: breadcrumbBg,
      ...borderRadius(breadcrumbBorderRadius)
    })
    expect(jss.createStyleSheet({ breadcrumb }).toString()).toBeDefined()
  })

  it('breadcrumb-item', () => {
    expect(breadcrumbItem).toEqual({
      '& + &': {
        paddingLeft: breadcrumbItemPadding,
        '&::before': {
          display: 'inline-block',
          paddingRight: breadcrumbItemPadding,
          color: breadcrumbDividerColor,
          content: breadcrumbDivider
        }
      },
      '& + &:hover::before': {
        textDecoration: 'none'
      },
      '&$active': {
        color: breadcrumbActiveColor
      }
    })
  })
  expect(jss.createStyleSheet({ active: {}, breadcrumbItem }).toString()).toBeDefined()
})
