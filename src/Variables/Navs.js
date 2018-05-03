import {grays} from './Colors'
import {borderWidth, borderRadius, componentActiveColor, componentActiveBg} from './Components'
import format from 'string-format'
import {bodyBg} from './Body'
import {spacer} from './Spacing'
import {size} from '../Functions/size'

export const navLinkPaddingY = '.5rem !default'
export const navLinkPaddingX = '1rem !default'
export const navLinkDisabledColor = grays._600

export const navTabsBorderColor = grays._300
export const navTabsBorderWidth = borderWidth
export const navTabsBorderRadius = borderRadius
export const navTabsLinkHoverBorderColor = format('{} {} {} !default', grays._200, grays._200, navTabsBorderColor)
export const navTabsLinkActiveColor = grays._700
export const navTabsLinkActiveBg = bodyBg
export const navTabsLinkActiveBorderColor = format('{} {} {} !default', grays._300, grays._300, navTabsLinkActiveBg)

export const navPillsBorderRadius = borderRadius
export const navPillsLinkActiveColor = componentActiveColor
export const navPillsLinkActiveBg = componentActiveBg

export const navDividerColor = grays._200
export const navDividerMarginY = format('{}{} !default', size(spacer).value / 2, size(spacer).unit)
