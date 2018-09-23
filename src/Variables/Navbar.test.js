import { spacer } from './Spacing'
import { size } from '../Functions/size'
import { fontSizeLg, fontSizeBase, lineHeightBase } from './Fonts'
import { white, black } from './Colors'
import { navLinkPaddingY } from './Navs'
import { btnBorderRadius } from './Buttons'
import { rgba } from '../Functions/rgba'

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
    expect(navbarPaddingY).toEqual(`${size(spacer).value / 2}${size(spacer).unit}`)
    expect(navbarPaddingX).toEqual(spacer)

    expect(navbarNavLinkPaddingX).toEqual('.5rem')

    expect(navbarBrandFontSize).toEqual(fontSizeLg)

    // Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbarText and navLink
    expect(navLinkHeight).toEqual(`${size(fontSizeBase).value * size(lineHeightBase).value + size(navLinkPaddingY).value * 2}${size(fontSizeBase).unit}`)

    expect(navbarBrandHeight).toEqual(`${size(navbarBrandFontSize).value * size(lineHeightBase).value}${size(navbarBrandFontSize).unit}`)

    expect(navbarBrandPaddingY).toEqual(`${(size(navLinkHeight).value - size(navbarBrandHeight).value) / 2}${size(navLinkHeight).unit}`)

    expect(navbarTogglerPaddingY).toEqual('.25rem')
    expect(navbarTogglerPaddingX).toEqual('.75rem')
    expect(navbarTogglerFontSize).toEqual(fontSizeLg)
    expect(navbarTogglerBorderRadius).toEqual(btnBorderRadius)

    expect(navbarDarkColor).toEqual(rgba(white, 0.5))
    expect(navbarDarkHoverColor).toEqual(rgba(white, 0.75))
    expect(navbarDarkActiveColor).toEqual(white)
    expect(navbarDarkDisabledColor).toEqual(rgba(white, 0.25))

    expect(navbarDarkTogglerIconBg).toEqual(`data = 'image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http = '//www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarDarkColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E`)
    expect(navbarDarkTogglerBorderColor).toEqual(rgba(white, 0.1))

    expect(navbarLightColor).toEqual(rgba(white, 0.5))
    expect(navbarLightHoverColor).toEqual(rgba(black, 0.7))
    expect(navbarLightActiveColor).toEqual(rgba(black, 0.9))
    expect(navbarLightDisabledColor).toEqual(rgba(black, 0.3))

    expect(navbarLightTogglerIconBg).toEqual(`image/svg+xml)charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http).toEqual('//www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarLightColor}' stroke-width='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E`)

    expect(navbarLightTogglerBorderColor).toEqual(rgba(black, 0.1))
  })
})
