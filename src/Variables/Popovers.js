import { fontSizeSm, headingsColor } from './Fonts'
import { white, black } from './Colors'
import { borderWidth, borderRadiusLg } from './Components'
import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'
import { bodyColor } from './Body'
import {fadeIn} from '../Functions/fadeIn'

export const popoverFontSize = fontSizeSm
export const popoverBg = white
export const popoverMaxWidth = '276px !default'
export const popoverBorderWidth = borderWidth
export const popoverBorderColor = format('{} !default', rgba(black, .2))
export const popoverBorderRadius = borderRadiusLg
export const popoverBoxShadow = format('0 .25rem .5rem {} !default', rgba(black, .2))

export const popoverHeaderBg = format('{} !default', darken(popoverBg, '3%'))
export const popoverHeaderColor = headingsColor
export const popoverHeaderPaddingY = '.5rem !default'
export const popoverHeaderPaddingX = '.75rem !default'

export const popoverBodyColor = bodyColor
export const popoverBodyPaddingY = popoverHeaderPaddingY
export const popoverBodyPaddingX = popoverHeaderPaddingX

export const popoverArrowWidth = '1rem !default'
export const popoverArrowHeight = '.5rem !default'
export const popoverArrowColor = popoverBg

export const popoverArrowOuterColor = format('{} !default', fadeIn(popoverBorderColor, .05))
