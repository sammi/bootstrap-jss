import {lineHeightBase, lineHeightLg} from './Fonts'
import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {componentActiveBg, borderWidth, lineHeightSm} from './Components'

export const inputBtnPaddingY = '.375rem !default'
export const inputBtnPaddingX = '.75rem !default'
export const inputBtnLineHeight = lineHeightBase

export const inputBtnFocusWidth = '.2rem !default'
export const inputBtnFocusColor = format('{} !default', rgba(componentActiveBg, .25))
export const inputBtnFocusBoxShadow = format('0 0 0 {} {} !default', inputBtnFocusWidth, inputBtnFocusColor)

export const inputBtnPaddingYSm = '.25rem !default'
export const inputBtnPaddingXSm = '.5rem !default'
export const inputBtnLineHeightSm = lineHeightSm

export const inputBtnPaddingYLg = '.5rem !default'
export const inputBtnPaddingXLg = '1rem !default'
export const inputBtnLineHeightLg = lineHeightLg

export const inputBtnBorderWidth = borderWidth
