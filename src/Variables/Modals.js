import { lineHeightBase } from './Fonts'
import { borderWidth, borderRadiusLg } from './Components'
import { rgba } from '../Functions/rgba'
import { grays, black, white } from './Colors'

export const modalInnerPadding = '1rem'

export const modalDialogMargin = '.5rem'
export const modalDialogMarginYSmUp = '1.75rem'

export const modalTitleLineHeight = lineHeightBase

export const modalContentBg = white
export const modalContentBorderColor = rgba(black, 0.2)
export const modalContentBorderWidth = borderWidth
export const modalContentBorderRadius = borderRadiusLg
export const modalContentBoxShadowXs = `0 .25rem .5rem ${rgba(black, 0.5)}`
export const modalContentBoxShadowSmUp = `0 .5rem 1rem ${rgba(black, 0.5)}`

export const modalBackdropBg = black
export const modalBackdropOpacity = 0.5
export const modalHeaderBorderColor = grays._200
export const modalFooterBorderColor = modalHeaderBorderColor
export const modalHeaderBorderWidth = modalContentBorderWidth
export const modalFooterBorderWidth = modalHeaderBorderWidth
export const modalHeaderPadding = '1rem'

export const modalLg = '800px'
export const modalMd = '500px'
export const modalSm = '300px'

export const modalTransition = 'transform .3s easeOut'
