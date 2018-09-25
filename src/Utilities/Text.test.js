import { fontFamilyMonospace, 
  fontWeightLight as fontWeightLightVariable,
  fontWeightLighter as fontWeightLighterVariable,
  fontWeightNormal as fontWeightNormalVariable,
  fontWeightBold as fontWeightBoldVariable,
  fontWeightBolder as fontWeightBolderVariable,
  textMuted as textMutedVariable
} from '../Variables/Fonts'
import { textTruncate as textTruncateMixin } from '../Mixins/textTruncate'
import { gridBreakpoints } from '../Variables/Grid'
import { breakpointInfix } from '../Mixins/breakpoints'
import { themeColors, white, black } from '../Variables/Colors'
import { textEmphasisVariant } from '../Mixins/textEmphasis'
import { textHide as textHideMixin} from '../Mixins/textHide'
import { rgba } from '../Functions/rgba'
import { bodyColor } from '../Variables/Body'

import {
  textMonospace, textJustify, textNowrap, textTruncate, responsive,
  textLowercase, textUppercase, textCapitalize,
  fontWeightLight, fontWeightLighter, fontWeightNormal, fontWeightBold, fontWeightBolder, fontWeightItalic,
  textWhite, textThemeColors, textBody, textMuted, textBlack50, textWhite50,
  textHide, textDecorationNone, textReset
} from './Text'

describe('text', () => {
  it('text-monospace', () => {
    expect(textMonospace).toEqual({
      fontFamily: fontFamilyMonospace
    })
  })

  it('text-justify', () => {
    expect(textJustify).toEqual({
      textAlign: 'justify !important'
    })
  })

  it('text-nowrap', () => {
    expect(textNowrap).toEqual({
      whiteSpace: 'nowrap !important'
    })
  })

  it('text-truncate', () => {
    expect(textTruncate).toEqual(textTruncateMixin)
  })

  it('Responsive alignment', () => {
    const responsiveExpectValue = {}
    for (const [name] of Object.entries(gridBreakpoints)) {
      const infix = breakpointInfix(name, gridBreakpoints)
      responsiveExpectValue[`text${infix}-left`] = { textAlign: 'left !important' }
      responsiveExpectValue[`text${infix}-right`] = { textAlign: 'right !important' }
      responsiveExpectValue[`text${infix}-center`] = { textAlign: 'center !important' }
    }
    expect(responsive).toEqual(responsiveExpectValue)
  })

  it('Transformation', () => {
    expect(textLowercase).toEqual({ textTransform: 'lowercase !important' })
    expect(textUppercase).toEqual({ textTransform: 'uppercase !important' })
    expect(textCapitalize).toEqual({ textTransform: 'capitalize !important' })
  })

  it('Weight and italics', () => {
    expect(fontWeightLight).toEqual({ fontWeight: `${fontWeightLightVariable} !important` })
    expect(fontWeightLighter).toEqual({ fontWeight: `${fontWeightLighterVariable} !important` })
    expect(fontWeightNormal).toEqual({ fontWeight: `${fontWeightNormalVariable} !important` })
    expect(fontWeightBold).toEqual({ fontWeight: `${fontWeightBoldVariable} !important` })
    expect(fontWeightBolder).toEqual({ fontWeight: `${fontWeightBolderVariable} !important` })
    expect(fontWeightItalic).toEqual({ fontWeight: 'italic !important' })
  })

  it('Contextual colors', () => {
    expect(textWhite).toEqual({ color: `${white} !important` })
    let textThemeColorsValue = {}
    for (const [color, value] of Object.entries(themeColors)) {
      textThemeColorsValue = {
        ...textThemeColorsValue,
        ...textEmphasisVariant(`text-${color}`, value)
      }
    }
    expect(textThemeColors).toEqual(textThemeColorsValue)
    expect(textBody).toEqual({ color: `${bodyColor} !important` })
    expect(textMuted).toEqual({ color: `${textMutedVariable} !important` })
    expect(textBlack50).toEqual({ color: `${rgba(black, 0.5)} !important` })
    expect(textWhite50).toEqual({ color: `${rgba(white, 0.5)} !important` })
  })

  it('text-hide', () => {
    expect(textHide).toEqual({ ...textHideMixin() })
  })

  it('text-decoration-none', () => {
    expect(textDecorationNone).toEqual({ textDecoration: 'none !important' })
  })

  it('text-reset', () => {
    expect(textReset).toEqual({ color: 'inherit !important' })
  })
})
