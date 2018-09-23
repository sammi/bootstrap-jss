import { fontSizeSm, headingsColor } from './Fonts'
import { white, black } from './Colors'
import { borderWidth, borderRadiusLg } from './Components'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'
import { bodyColor } from './Body'
import { fadeIn } from '../Functions/fadeIn'

import {
  popoverFontSize,
  popoverBg,
  popoverMaxWidth,
  popoverBorderWidth,
  popoverBorderColor,
  popoverBorderRadius,
  popoverBoxShadow,

  popoverHeaderBg,
  popoverHeaderColor,
  popoverHeaderPaddingY,
  popoverHeaderPaddingX,

  popoverBodyColor,
  popoverBodyPaddingY,
  popoverBodyPaddingX,

  popoverArrowWidth,
  popoverArrowHeight,
  popoverArrowColor,

  popoverArrowOuterColor
} from './Popovers'

describe('Popovers', () => {
  it('Popovers', () => {
    expect(popoverFontSize).toEqual(fontSizeSm)
    expect(popoverBg).toEqual(white)
    expect(popoverMaxWidth).toEqual('276px')
    expect(popoverBorderWidth).toEqual(borderWidth)
    expect(popoverBorderColor).toEqual(rgba(black, 0.2))
    expect(popoverBorderRadius).toEqual(borderRadiusLg)
    expect(popoverBoxShadow).toEqual(`0 .25rem .5rem ${rgba(black, 0.2)}`)

    expect(popoverHeaderBg).toEqual(darken(popoverBg, '3%'))
    expect(popoverHeaderColor).toEqual(headingsColor)
    expect(popoverHeaderPaddingY).toEqual('.5rem')
    expect(popoverHeaderPaddingX).toEqual('.75rem')

    expect(popoverBodyColor).toEqual(bodyColor)
    expect(popoverBodyPaddingY).toEqual(popoverHeaderPaddingY)
    expect(popoverBodyPaddingX).toEqual(popoverHeaderPaddingX)

    expect(popoverArrowWidth).toEqual('1rem')
    expect(popoverArrowHeight).toEqual('.5rem')
    expect(popoverArrowColor).toEqual(popoverBg)

    expect(popoverArrowOuterColor).toEqual(fadeIn(popoverBorderColor, 0.05))
  })
})
