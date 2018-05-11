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

export const btnPaddingY = inputBtnPaddingY
export const btnPaddingX = inputBtnPaddingX
export const btnLineHeight = inputBtnLineHeight

export const btnPaddingYSm = inputBtnPaddingYSm
export const btnPaddingXSm = inputBtnPaddingXSm
export const btnLineHeightSm = inputBtnLineHeightSm

export const btnPaddingYLg = inputBtnPaddingYLg
export const btnPaddingXLg = inputBtnPaddingXLg
export const btnLineHeightLg = inputBtnLineHeightLg

export const btnBorderWidth = inputBtnBorderWidth

export const btnFontWeight = fontWeightNormal
export const btnBoxShadowfontWeightNormal = format('inset 0 1px 0 {}, 0 1px 1px {}', rgba(white, 0.15), rgba(black, 0.075))
export const btnFocusWidth = inputBtnFocusWidth
export const btnFocusBoxShadow = inputBtnFocusBoxShadow
export const btnDisabledOpacity = 0.65
export const btnActiveBoxShadow = format('inset 0 3px 5px {}', rgba(black, 0.125))

export const btnLinkDisabledColor = grays._600

export const btnBlockSpacingY = '.5rem'

// Allows for customizing button radius independently from global border radius
export const btnBorderRadius = borderRadius
export const btnBorderRadiusLg = borderRadiusLg
export const btnBorderRadiusSm = borderRadiusSm

export const btnTransition = 'color .15s ease-inOut, background-color .15s ease-inOut, border-color .15s ease-inOut, box-shadow .15s ease-inOut'
