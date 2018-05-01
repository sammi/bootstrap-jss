import {themeColors} from './Colors'
import {darken} from '../Functions/darken'

export const linkColor = themeColors.primary

export const linkDecoration = 'none !default'

export const linkHoverColor = darken(linkColor, '15%') + ' !default'

export const linkHoverDecoration = 'underline !default'