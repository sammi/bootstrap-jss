import {spacer} from './Spacing'
import format from 'string-format'
import {size} from '../Functions/size'
import {fontSizeLg, fontSizeBase, lineHeightBase} from './Fonts'
import {white, black} from './Colors'
import {navLinkPaddingY} from './Navs'
import {btnBorderRadius} from './Buttons'
import {rgba} from '../Functions/rgba'

export const navbarPaddingY = format('{}{} !default', size(spacer).value / 2, size(spacer).unit)
export const navbarPaddingX = spacer

export const navbarNavLinkPaddingX = '.5rem !default'

export const navbarBrandFontSize = fontSizeLg

// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbarText and navLink
export const navLinkHeight = format('{}{} !default', 
    size(fontSizeBase).value * size(lineHeightBase).value + size(navLinkPaddingY).value * 2,
    size(fontSizeBase).unit
)
    
export const navbarBrandHeight = format('{}{} !default',
    size(navbarBrandFontSize).value * size(lineHeightBase).value,
    size(navbarBrandFontSize).unit
)

export const navbarBrandPaddingY = format('{}{} !default',
    (size(navLinkHeight).value - size(navbarBrandHeight).value) / 2,
    size(navLinkHeight).unit
)

export const navbarTogglerPaddingY = '.25rem !default'
export const navbarTogglerPaddingX = '.75rem !default'
export const navbarTogglerFontSize = fontSizeLg
export const navbarTogglerBorderRadius = btnBorderRadius

export const navbarDarkColor = format('{} !default', rgba(white, .5))
export const navbarDarkHoverColor = format('{} !default', rgba(white, .75))
export const navbarDarkActiveColor = white
export const navbarDarkDisabledColor = format('{} !default', rgba(white, .25))

//strReplace(url("data = 'image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http = '//www.w3.org/2000/svg'%3E%3Cpath stroke='#{navbarDarkColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default
export const navbarDarkTogglerIconBg = ''
export const navbarDarkTogglerBorderColor = format('{} !default', rgba(white, .1))

export const navbarLightColor = format('{} !default', rgba(white, .5))
export const navbarLightHoverColor = format('{} !default', rgba(black, .7))
export const navbarLightActiveColor = format('{} !default', rgba(black, .9))
export const navbarLightDisabledColor = format('{} !default', rgba(black, .3))
//strReplace(url("data = 'image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http = '//www.w3.org/2000/svg'%3E%3Cpath stroke='#{navbarLightColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default
export const navbarLightTogglerIconBg = ''
export const navbarLightTogglerBorderColor = format('{} !default', rgba(black, .1))
