import { grays, white, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { borderWidth, borderRadius } from './Components'
import { gridGutterWidth } from './Grid'
import format from 'string-format'
import {size} from '../Functions/size'

export const cardSpacerY = '.75rem'
export const cardSpacerX = '1.25rem'
export const cardBorderWidth = borderWidth
export const cardBorderRadius = borderRadius
export const cardBorderColor = format('{}', rgba(black, .125))
export const cardInnerBorderRadius = format('{}{}',
    size(cardBorderRadius).value - size(cardBorderWidth).value,
    size(cardBorderRadius).unit
)

export const cardCapBg = format('{}', rgba(black, .03))
export const cardBg = white

export const cardImgOverlayPadding = '1.25rem'

export const cardGroupMargin = format('{}{}', size(gridGutterWidth).value / 2, size(gridGutterWidth).unit)

export const cardDeckMargin = cardGroupMargin

export const cardColumnsCount = '3'
export const cardColumnsGap = '1.25rem'
export const cardColumnsMargin = cardSpacerY
