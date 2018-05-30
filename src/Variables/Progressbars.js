import { fontSizeBase } from './Fonts'
import { grays, white, black, themeColors } from './Colors'
import { borderRadius } from './Components'
import format from 'string-format'
import { size } from '../Functions/size'
import { rgba } from '../Functions/rgba'

export const progressHeight = '1rem'
export const progressFontSize = format('{}{}', size(fontSizeBase).value * 0.75, size(fontSizeBase).unit)
export const progressBg = grays._200
export const progressBorderRadius = borderRadius
export const progressBoxShadow = format('inset 0 .1rem .1rem {}', rgba(black, 0.1))
export const progressBarColor = white
export const progressBarBg = themeColors.primary
export const progressBarAnimationTiming = '1s linear infinite'
export const progressBarTransition = 'width .6s ease'
