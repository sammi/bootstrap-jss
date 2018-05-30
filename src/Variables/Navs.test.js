import { grays } from './Colors'
import { borderWidth, borderRadius, componentActiveColor, componentActiveBg } from './Components'
import format from 'string-format'
import { bodyBg } from './Body'
import { spacer } from './Spacing'
import { size } from '../Functions/size'

import {
  navLinkPaddingY,
  navLinkPaddingX,
  navLinkDisabledColor,
  navTabsBorderColor,
  navTabsBorderWidth,
  navTabsBorderRadius,
  navTabsLinkHoverBorderColor,
  navTabsLinkActiveColor,
  navTabsLinkActiveBg,
  navTabsLinkActiveBorderColor,
  navPillsBorderRadius,
  navPillsLinkActiveColor,
  navPillsLinkActiveBg,
  navDividerColor,
  navDividerMarginY
} from './Navs'

describe('Navs', () => {
  it('Navs', () => {
    expect(navLinkPaddingY).toEqual('.5rem')
    expect(navLinkPaddingX).toEqual('1rem')
    expect(navLinkDisabledColor).toEqual(grays._600)

    expect(navTabsBorderColor).toEqual(grays._300)
    expect(navTabsBorderWidth).toEqual(borderWidth)
    expect(navTabsBorderRadius).toEqual(borderRadius)
    expect(navTabsLinkHoverBorderColor).toEqual(format('{} {} {}', grays._200, grays._200, navTabsBorderColor))
    expect(navTabsLinkActiveColor).toEqual(grays._700)
    expect(navTabsLinkActiveBg).toEqual(bodyBg)
    expect(navTabsLinkActiveBorderColor).toEqual(format('{} {} {}', grays._300, grays._300, navTabsLinkActiveBg))

    expect(navPillsBorderRadius).toEqual(borderRadius)
    expect(navPillsLinkActiveColor).toEqual(componentActiveColor)
    expect(navPillsLinkActiveBg).toEqual(componentActiveBg)

    expect(navDividerColor).toEqual(grays._200)
    expect(navDividerMarginY).toEqual(format('{}{}', size(spacer).value / 2, size(spacer).unit))
  })
})
