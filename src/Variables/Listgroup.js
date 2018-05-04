import {grays, white, black} from './Colors'
import {borderWidth, borderRadius, componentActiveColor, componentActiveBg} from './Components'
import {rgba} from '../Functions/rgba'
import format from 'string-format'
import {bodyColor} from './Body'

export const listGroupBg = white
export const listGroupBorderColor = format('{}', rgba(black, .125))
export const listGroupBorderWidth = borderWidth
export const listGroupBorderRadius = borderRadius

export const listGroupItemPaddingY = '.75rem'
export const listGroupItemPaddingX = '1.25rem'

export const listGroupHoverBg = grays._100
export const listGroupActiveColor = componentActiveColor
export const listGroupActiveBg = componentActiveBg
export const listGroupActiveBorderColor = listGroupActiveBg

export const listGroupDisabledColor = grays._600
export const listGroupDisabledBg = listGroupBg

export const listGroupActionColor = grays._700
export const listGroupActionHoverColor = listGroupActionColor

export const listGroupActionActiveColor = bodyColor
export const listGroupActionActiveBg = grays._200
