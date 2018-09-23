import { fontWeightBold, fontSizeBase } from './Fonts'
import { black, white } from './Colors'
import { size } from '../Functions/size'

export const closeFontSize = `${size(fontSizeBase).value * 1.5}${size(fontSizeBase).unit}`
export const closeFontWeight = fontWeightBold
export const closeColor = black
export const closeTextShadow = `0 1px 0 ${white}`
