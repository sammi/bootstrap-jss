import {
  breadcrumbPaddingY, breadcrumbPaddingX, breadcrumbMarginBottom,
  breadcrumbBg, breadcrumbBorderRadius,
  breadcrumbItemPadding, breadcrumbDividerColor,
  breadcrumbDivider, breadcrumbActiveColor
} from '../Variables/Breadcrumbs'
import { borderRadius } from '../Mixins/borderRadius'

const breadcrumb = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: `${breadcrumbPaddingY} ${breadcrumbPaddingX}`,
  marginBottom: breadcrumbMarginBottom,
  listStyle: 'none',
  backgroundColor: breadcrumbBg,
  ...borderRadius(breadcrumbBorderRadius)
}

const breadcrumbItem = {
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
}

export {
  breadcrumb,
  breadcrumbItem
}
