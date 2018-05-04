import format from 'string-format'
import {fontWeightBold, fontSizeBase} from './Fonts'
import {black, white} from './Colors'
import {size} from '../Functions/size'

export const closeFontSize = format(
    '{}{}',
    size(fontSizeBase).value * 1.5,
    size(fontSizeBase).unit
)
export const closeFontWeight = fontWeightBold
export const closeColor = black
export const closeTextShadow = format('0 1px 0 {}', white)
