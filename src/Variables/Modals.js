import {lineHeightBase} from './Fonts'
import {borderWidth, borderRadiusLg} from './Components'
import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {grays, black, white} from './Colors'

export const modalInnerPadding = '1rem !default'

export const modalDialogMargin = '.5rem !default'
export const modalDialogMarginYSmUp = '1.75rem !default'

export const modalTitleLineHeight = lineHeightBase

export const modalContentBg = white
export const modalContentBorderColor = format('{} !default', rgba(black, .2))
export const modalContentBorderWidth = borderWidth
export const modalContentBorderRadius = borderRadiusLg
export const modalContentBoxShadowXs = format('0 .25rem .5rem {} !default', rgba(black, .5))
export const modalContentBoxShadowSmUp = format('0 .5rem 1rem {} !default', rgba(black, .5))

export const modalBackdropBg = black
export const modalBackdropOpacity = '.5 !default'
export const modalHeaderBorderColor = grays._200
export const modalFooterBorderColor = modalHeaderBorderColor
export const modalHeaderBorderWidth = modalContentBorderWidth
export const modalFooterBorderWidth = modalHeaderBorderWidth
export const modalHeaderPadding = '1rem !default'

export const modalLg = '800px !default'
export const modalMd = '500px !default'
export const modalSm = '300px !default'

export const modalTransition = 'transform .3s easeOut !default'
