import { grays, white, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'
import format from 'string-format'
import { borderRadius, borderWidth, componentActiveColor, componentActiveBg } from './Components'

export const dropdownMinWidth = '10rem'
export const dropdownPaddingY = '.5rem'
export const dropdownSpacer = '.125rem'
export const dropdownBg = white
export const dropdownBorderColor = format('{}', rgba(black, 0.15))
export const dropdownBorderRadius = borderRadius
export const dropdownBorderWidth = borderWidth
export const dropdownDividerBg = grays._200
export const dropdownBoxShadow = format('0 .5rem 1rem {}', rgba(black, 0.175))

export const dropdownLinkColor = grays._900
export const dropdownLinkHoverColor = format('{}', darken(grays._900, '5%'))
export const dropdownLinkHoverBg = grays._100

export const dropdownLinkActiveColor = componentActiveColor
export const dropdownLinkActiveBg = componentActiveBg

export const dropdownLinkDisabledColor = grays._600

export const dropdownItemPaddingY = '.25rem'
export const dropdownItemPaddingX = '1.5rem'

export const dropdownHeaderColor = grays._600
