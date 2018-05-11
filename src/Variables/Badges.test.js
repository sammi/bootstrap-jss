import {fontWeightBold} from './Fonts'
import {borderRadius} from './Components'

import {
  badgeFontSize,
  badgeFontWeight,
  badgePaddingY,
  badgePaddingX,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from './Badges'

describe('Badges', () => {
  it('Badges', () => {
    expect(badgeFontSize).toEqual('75%')
    expect(badgeFontWeight).toEqual(fontWeightBold)
    expect(badgePaddingY).toEqual('.25em')
    expect(badgePaddingX).toEqual('.4em')
    expect(badgeBorderRadius).toEqual(borderRadius)
    expect(badgePillPaddingX).toEqual('.6em')
    expect(badgePillBorderRadius).toEqual('10rem')
  })
})
