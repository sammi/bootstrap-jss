import { grays, black, white, themeColors } from './Colors'
import {rgba} from '../Functions/rgba'
import format from 'string-format'

export const lineHeightLg = '1.5'
export const lineHeightSm = '1.5'

export const borderWidth = '1px'
export const borderColor = grays._300
export const borderRadius = '.25rem'
export const borderRadiusLg = '.3rem'
export const borderRadiusSm = '.2rem'

export const boxShadowSm = format('0 .125rem .25rem {}', rgba(black, .075))
export const boxShadow = format('0 .5rem 1rem {}', rgba(black, .15))
export const boxShadowLg = format('0 1rem 3rem {}', rgba(black, .175))

export const componentActiveColor = white
export const componentActiveBg = themeColors.primary

export const caretWidth = '.3em'

export const transitionBase = 'all .2s ease-in-out'
export const transitionFade = 'opacity .15s linear'
export const transitionCollapse = 'height .35s ease'
