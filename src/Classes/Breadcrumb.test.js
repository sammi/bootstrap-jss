import {
  breadcrumbPaddingY, breadcrumbPaddingX, breadcrumbMarginBottom,
  breadcrumbBg, breadcrumbBorderRadius,
  breadcrumbItemPadding, breadcrumbDividerColor,
  breadcrumbDivider, breadcrumbActiveColor
} from '../Variables/Breadcrumbs'
import { borderRadius } from '../Mixins/borderRadius'

import { breadcrumb, breadcrumbItem } from './Breadcrumb'

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
  })

  it('breadcrumb-item', () => {
    expect(breadcrumbItem).toEqual({
      '+ breadcrumbItem': {
        paddingLeft: breadcrumbItemPadding,
        '&::before': {
          display: 'inline-block',
          paddingRight: breadcrumbItemPadding,
          color: breadcrumbDividerColor,
          content: breadcrumbDivider
        }
      },
      '+ breadcrumbItem:hover::before': {
        textDecoration: 'none'
      },
      '&.active': {
        color: breadcrumbActiveColor
      }
    })
  })
})
