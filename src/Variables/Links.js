import { themeColors } from './Colors'
import { darken } from '../Functions/darken'

export const linkColor = themeColors.primary

export const linkDecoration = 'none'

export const linkHoverColor = darken(linkColor, '15%') + ''

export const linkHoverDecoration = 'underline'
