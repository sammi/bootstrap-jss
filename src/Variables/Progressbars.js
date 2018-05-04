import {fontSizeBase} from './Fonts'
import {grays, white, black, themeColors} from './Colors'
import {borderRadius} from './Components'
import format from 'string-format'
import {size} from '../Functions/size'
import {rgba} from '../Functions/rgba'

export const progressHeight = '1rem !default'
export const progressFontSize = format('{}{} !default', size(fontSizeBase).value * .75, size(fontSizeBase).unit)
export const progressBg = grays._200
export const progressBorderRadius = borderRadius
export const progressBoxShadow = format('inset 0 .1rem .1rem {} !default', rgba(black, .1))
export const progressBarColor = white
export const progressBarBg = themeColors.primary
export const progressBarAnimationTiming = '1s linear infinite !default'
export const progressBarTransition = 'width .6s ease !default'
