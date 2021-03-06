import { spacer } from './Spacing'
import { size } from '../Functions/size'
import { fontSizeLg, fontSizeBase, lineHeightBase } from './Fonts'
import { white, black } from './Colors'
import { navLinkPaddingY } from './Navs'
import { btnBorderRadius } from './Buttons'
import { rgba } from '../Functions/rgba'

export const navbarPaddingY = `${size(spacer).value / 2}${size(spacer).unit}`
export const navbarPaddingX = spacer

export const navbarNavLinkPaddingX = '.5rem'

export const navbarBrandFontSize = fontSizeLg

// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbarText and navLink
export const navLinkHeight = `${size(fontSizeBase).value * size(lineHeightBase).value + size(navLinkPaddingY).value * 2}${size(fontSizeBase).unit}`

export const navbarBrandHeight = `${size(navbarBrandFontSize).value * size(lineHeightBase).value}${size(navbarBrandFontSize).unit}`

export const navbarBrandPaddingY = `${(size(navLinkHeight).value - size(navbarBrandHeight).value) / 2}${size(navLinkHeight).unit}`

export const navbarTogglerPaddingY = '.25rem'
export const navbarTogglerPaddingX = '.75rem'
export const navbarTogglerFontSize = fontSizeLg
export const navbarTogglerBorderRadius = btnBorderRadius

export const navbarDarkColor = rgba(white, 0.5)
export const navbarDarkHoverColor = rgba(white, 0.75)
export const navbarDarkActiveColor = white
export const navbarDarkDisabledColor = rgba(white, 0.25)

export const navbarDarkTogglerIconBg = `data = 'image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http = '//www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarDarkColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E`
export const navbarDarkTogglerBorderColor = rgba(white, 0.1)

export const navbarLightColor = rgba(white, 0.5)
export const navbarLightHoverColor = rgba(black, 0.7)
export const navbarLightActiveColor = rgba(black, 0.9)
export const navbarLightDisabledColor = rgba(black, 0.3)

export const navbarLightTogglerIconBg = `image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http).toEqual('//www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarLightColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E`

export const navbarLightTogglerBorderColor = rgba(black, 0.1)
