import {spacer} from './Spacing'
import format from 'string-format'
import {size} from '../Functions/size'
import {fontSizeLg, fontSizeBase, lineHeightBase} from './Fonts'
import {white, black} from './Colors'
import {navLinkPaddingY} from './Navs'
import {btnBorderRadius} from './Buttons'
import {rgba} from '../Functions/rgba'

export const navbarPaddingY = format('{}{}', size(spacer).value / 2, size(spacer).unit)
export const navbarPaddingX = spacer

export const navbarNavLinkPaddingX = '.5rem'

export const navbarBrandFontSize = fontSizeLg

// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbarText and navLink
export const navLinkHeight = format('{}{}',
  size(fontSizeBase).value * size(lineHeightBase).value + size(navLinkPaddingY).value * 2,
  size(fontSizeBase).unit
)

export const navbarBrandHeight = format('{}{}',
  size(navbarBrandFontSize).value * size(lineHeightBase).value,
  size(navbarBrandFontSize).unit
)

export const navbarBrandPaddingY = format('{}{}',
  (size(navLinkHeight).value - size(navbarBrandHeight).value) / 2,
  size(navLinkHeight).unit
)

export const navbarTogglerPaddingY = '.25rem'
export const navbarTogglerPaddingX = '.75rem'
export const navbarTogglerFontSize = fontSizeLg
export const navbarTogglerBorderRadius = btnBorderRadius

export const navbarDarkColor = format('{}', rgba(white, 0.5))
export const navbarDarkHoverColor = format('{}', rgba(white, 0.75))
export const navbarDarkActiveColor = white
export const navbarDarkDisabledColor = format('{}', rgba(white, 0.25))

export const navbarDarkTogglerIconBg = format(
  "data = 'image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http = '//www.w3.org/2000/svg'%3E%3Cpath stroke='{}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E",
  navbarDarkColor
)
export const navbarDarkTogglerBorderColor = format('{}', rgba(white, 0.1))

export const navbarLightColor = format('{}', rgba(white, 0.5))
export const navbarLightHoverColor = format('{}', rgba(black, 0.7))
export const navbarLightActiveColor = format('{}', rgba(black, 0.9))
export const navbarLightDisabledColor = format('{}', rgba(black, 0.3))

export const navbarLightTogglerIconBg = format(
  "image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http).toEqual('//www.w3.org/2000/svg'%3E%3Cpath stroke='{}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E",
  navbarLightColor
)

export const navbarLightTogglerBorderColor = format('{}', rgba(black, 0.1))
