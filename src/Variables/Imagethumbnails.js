import { bodyBg } from './Body'
import { borderWidth, borderRadius } from './Components'
import { grays, black } from './Colors'
import { rgba } from '../Functions/rgba'

export const thumbnailPadding = '.25rem'
export const thumbnailBg = bodyBg
export const thumbnailBorderWidth = borderWidth
export const thumbnailBorderColor = grays._300
export const thumbnailBorderRadius = borderRadius
export const thumbnailBoxShadow = `0 1px 2px ${rgba(black, 0.075)}`
