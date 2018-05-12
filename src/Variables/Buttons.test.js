import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { black, white, grays } from './Colors'
import { borderRadius, borderRadiusLg, borderRadiusSm } from './Components'
import { fontWeightNormal } from './Fonts'

import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
  inputBtnBorderWidth,
  inputBtnFocusWidth,
  inputBtnFocusBoxShadow
} from './InputButtons'

import {
  btnPaddingX,
  btnPaddingY,
  btnPaddingYLg,
  btnPaddingXSm,
  btnPaddingYSm,
  btnPaddingXLg,
  btnLineHeight,
  btnLineHeightSm,
  btnLineHeightLg,
  btnBorderWidth,
  btnFontWeight,
  btnBoxShadow,
  btnFocusWidth,
  btnFocusBoxShadow,
  btnDisabledOpacity,
  btnActiveBoxShadow,
  btnLinkDisabledColor,
  btnBlockSpacingY,
  btnBorderRadius,
  btnBorderRadiusLg,
  btnBorderRadiusSm,
  btnTransition
} from './Buttons'

describe('Buttons', () => {
  it('For each of Bootstrap\'s buttons, define text, background, and border color.', () => {
    expect(btnPaddingY).toEqual(inputBtnPaddingY)
    expect(btnPaddingX).toEqual(inputBtnPaddingX)
    expect(btnLineHeight).toEqual(inputBtnLineHeight)

    expect(btnPaddingYSm).toEqual(inputBtnPaddingYSm)
    expect(btnPaddingXSm).toEqual(inputBtnPaddingXSm)
    expect(btnLineHeightSm).toEqual(inputBtnLineHeightSm)

    expect(btnPaddingYLg).toEqual(inputBtnPaddingYLg)
    expect(btnPaddingXLg).toEqual(inputBtnPaddingXLg)
    expect(btnLineHeightLg).toEqual(inputBtnLineHeightLg)

    expect(btnBorderWidth).toEqual(inputBtnBorderWidth)

    expect(btnFontWeight).toEqual(fontWeightNormal)
    expect(btnBoxShadow).toEqual(format('inset 0 1px 0 {}, 0 1px 1px {}', rgba(white, 0.15), rgba(black, 0.075)))
    expect(btnFocusWidth).toEqual(inputBtnFocusWidth)
    expect(btnFocusBoxShadow).toEqual(inputBtnFocusBoxShadow)
    expect(btnDisabledOpacity).toEqual(0.65)
    expect(btnActiveBoxShadow).toEqual(format('inset 0 3px 5px {}', rgba(black, 0.125)))

    expect(btnLinkDisabledColor).toEqual(grays._600)

    expect(btnBlockSpacingY).toEqual('.5rem')

    // Allows for customizing button radius independently from global border radius
    expect(btnBorderRadius).toEqual(borderRadius)
    expect(btnBorderRadiusLg).toEqual(borderRadiusLg)
    expect(btnBorderRadiusSm).toEqual(borderRadiusSm)

    expect(btnTransition).toEqual(
      'color .15s ease-inOut, background-color .15s ease-inOut, border-color .15s ease-inOut, box-shadow .15s ease-inOut'
    )
  })
})
