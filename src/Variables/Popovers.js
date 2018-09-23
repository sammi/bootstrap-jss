import { fontSizeSm, headingsColor } from './Fonts'
import { white, black } from './Colors'
import { borderWidth, borderRadiusLg } from './Components'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'
import { bodyColor } from './Body'
import { fadeIn } from '../Functions/fadeIn'

export const popoverFontSize = fontSizeSm
export const popoverBg = white
export const popoverMaxWidth = '276px'
export const popoverBorderWidth = borderWidth
export const popoverBorderColor = rgba(black, 0.2)
export const popoverBorderRadius = borderRadiusLg
export const popoverBoxShadow = `0 .25rem .5rem ${rgba(black, 0.2)}`

export const popoverHeaderBg = darken(popoverBg, '3%')
export const popoverHeaderColor = headingsColor
export const popoverHeaderPaddingY = '.5rem'
export const popoverHeaderPaddingX = '.75rem'

export const popoverBodyColor = bodyColor
export const popoverBodyPaddingY = popoverHeaderPaddingY
export const popoverBodyPaddingX = popoverHeaderPaddingX

export const popoverArrowWidth = '1rem'
export const popoverArrowHeight = '.5rem'
export const popoverArrowColor = popoverBg

export const popoverArrowOuterColor = fadeIn(popoverBorderColor, 0.05)
