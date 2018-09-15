import { grays } from './Colors'
import { borderRadius } from './Components'

import {
  breadcrumbPaddingY,
  breadcrumbPaddingX,
  breadcrumbItemPadding,
  breadcrumbMarginBottom,
  breadcrumbBg,
  breadcrumbDividerColor,
  breadcrumbActiveColor,
  breadcrumbDivider,
  breadcrumbBorderRadius
} from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('Breadcrumbs', () => {
    expect(breadcrumbPaddingY).toEqual('.75rem')
    expect(breadcrumbPaddingX).toEqual('1rem')
    expect(breadcrumbItemPadding).toEqual('.5rem')

    expect(breadcrumbMarginBottom).toEqual('1rem')

    expect(breadcrumbBg).toEqual(grays._200)
    expect(breadcrumbDividerColor).toEqual(grays._600)
    expect(breadcrumbActiveColor).toEqual(grays._600)
    expect(breadcrumbDivider).toEqual('quote("/")')

    expect(breadcrumbBorderRadius).toEqual(borderRadius)
  })
})
