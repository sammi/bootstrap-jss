import { grays, black, white, themeColors } from './Colors'
import {rgba} from '../Functions/rgba'
import format from 'string-format'

export const lineHeightLg = '1.5 !default'
export const lineHeightSm = '1.5 !default'

export const borderWidth = '1px !default'
export const borderColor = grays._300
export const borderRadius = '.25rem !default'
export const borderRadiusLg = '.3rem !default'
export const borderRadiusSm = '.2rem !default'

export const boxShadowSm = format('0 .125rem .25rem {} !default', rgba(black, .075))
export const boxShadow = format('0 .5rem 1rem {} !default', rgba(black, .15))
export const boxShadowLg = format('0 1rem 3rem {} !default', rgba(black, .175))

export const componentActiveColor = white
export const componentActiveBg = themeColors.primary

export const caretWidth = '.3em !default'

export const transitionBase = 'all .2s ease-in-out !default'
export const transitionFade = 'opacity .15s linear !default'
export const transitionCollapse = 'height .35s ease !default'
