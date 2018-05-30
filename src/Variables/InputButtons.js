import { lineHeightBase } from './Fonts'
import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { componentActiveBg, borderWidth, lineHeightSm, lineHeightLg } from './Components'

export const inputBtnPaddingY = '.375rem'
export const inputBtnPaddingX = '.75rem'
export const inputBtnLineHeight = lineHeightBase

export const inputBtnFocusWidth = '.2rem'
export const inputBtnFocusColor = format('{}', rgba(componentActiveBg, 0.25))
export const inputBtnFocusBoxShadow = format('0 0 0 {} {}', inputBtnFocusWidth, inputBtnFocusColor)

export const inputBtnPaddingYSm = '.25rem'
export const inputBtnPaddingXSm = '.5rem'
export const inputBtnLineHeightSm = lineHeightSm

export const inputBtnPaddingYLg = '.5rem'
export const inputBtnPaddingXLg = '1rem'
export const inputBtnLineHeightLg = lineHeightLg

export const inputBtnBorderWidth = borderWidth
