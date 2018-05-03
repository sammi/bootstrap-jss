import {spacer} from './Spacing'
import format from 'string-format'
import {size} from '../Functions/size'
import {fontSizeLg, fontSizeBase, lineHeightBase} from './Fonts'
import {white, black} from './Colors'
import {navLinkPaddingY} from './Navs'
import {btnBorderRadius} from './Buttons'
import {rgba} from '../Functions/rgba'

import {
    navbarPaddingY,
    navbarPaddingX,
    navbarNavLinkPaddingX,
    navbarBrandFontSize,
    navLinkHeight,
    navbarBrandHeight,
    navbarBrandPaddingY,
    navbarTogglerPaddingY,
    navbarTogglerPaddingX,
    navbarTogglerFontSize,
    navbarTogglerBorderRadius,
    navbarDarkColor,
    navbarDarkHoverColor,
    navbarDarkActiveColor,
    navbarDarkDisabledColor,
    navbarDarkTogglerIconBg,
    navbarDarkTogglerBorderColor,
    navbarLightColor,
    navbarLightHoverColor,
    navbarLightActiveColor,
    navbarLightDisabledColor,
    navbarLightTogglerIconBg,
    navbarLightTogglerBorderColor
} from './Navbar'

describe('Navbar', () => {

    it('Navbar', () => {

        expect(navbarPaddingY).toEqual(format('{}{} !default', size(spacer).value / 2, size(spacer).unit))
        expect(navbarPaddingX).toEqual(spacer)

        expect(navbarNavLinkPaddingX).toEqual('.5rem !default')

        expect(navbarBrandFontSize).toEqual(fontSizeLg)

        // Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbarText and navLink
        expect(navLinkHeight).toEqual(format('{}{} !default', 
            size(fontSizeBase).value * size(lineHeightBase).value + size(navLinkPaddingY).value * 2,
            size(fontSizeBase).unit
        ))
            
        expect(navbarBrandHeight).toEqual(format('{}{} !default',
            size(navbarBrandFontSize).value * size(lineHeightBase).value,
            size(navbarBrandFontSize).unit
        ))

        expect(navbarBrandPaddingY).toEqual(format('{}{} !default',
            (size(navLinkHeight).value - size(navbarBrandHeight).value) / 2,
            size(navLinkHeight).unit
        ))

        expect(navbarTogglerPaddingY).toEqual('.25rem !default')
        expect(navbarTogglerPaddingX).toEqual('.75rem !default')
        expect(navbarTogglerFontSize).toEqual(fontSizeLg)
        expect(navbarTogglerBorderRadius).toEqual(btnBorderRadius)

        expect(navbarDarkColor).toEqual(format('{} !default', rgba(white, .5)))
        expect(navbarDarkHoverColor).toEqual(format('{} !default', rgba(white, .75)))
        expect(navbarDarkActiveColor).toEqual(white)
        expect(navbarDarkDisabledColor).toEqual(format('{} !default', rgba(white, .25)))

        //strReplace(url("data).toEqual('image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http).toEqual('//www.w3.org/2000/svg'%3E%3Cpath stroke='#{navbarDarkColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default
        expect(navbarDarkTogglerIconBg).toEqual('')
        expect(navbarDarkTogglerBorderColor).toEqual(format('{} !default', rgba(white, .1)))

        expect(navbarLightColor).toEqual(format('{} !default', rgba(white, .5)))
        expect(navbarLightHoverColor).toEqual(format('{} !default', rgba(black, .7)))
        expect(navbarLightActiveColor).toEqual(format('{} !default', rgba(black, .9)))
        expect(navbarLightDisabledColor).toEqual(format('{} !default', rgba(black, .3)))
        //strReplace(url("data).toEqual('image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http).toEqual('//www.w3.org/2000/svg'%3E%3Cpath stroke='#{navbarLightColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default
        expect(navbarLightTogglerIconBg).toEqual('')
        expect(navbarLightTogglerBorderColor).toEqual(format('{} !default', rgba(black, .1)))

    })
})
