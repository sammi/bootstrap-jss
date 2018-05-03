import {grays, white, black} from './Colors'
import {rgba} from '../Functions/rgba'
import {darken} from '../Functions/darken'
import format from 'string-format'
import {borderRadius, borderWidth, componentActiveColor, componentActiveBg} from './Components'

import {
    dropdownMinWidth,
    dropdownPaddingY,
    dropdownSpacer,
    dropdownBg,
    dropdownBorderColor,
    dropdownBorderRadius,
    dropdownBorderWidth,
    dropdownDividerBg,
    dropdownBoxShadow,
    dropdownLinkColor,
    dropdownLinkHoverColor,
    dropdownLinkHoverBg,
    dropdownLinkActiveColor,
    dropdownLinkActiveBg,
    dropdownLinkDisabledColor,
    dropdownItemPaddingY,
    dropdownItemPaddingX,
    dropdownHeaderColor
} from './Dropdowns'

describe('Dropdowns', () => {

    it('Dropdown menu container and contents.', () => {
        expect(dropdownMinWidth).toEqual('10rem !default')
        expect(dropdownPaddingY).toEqual('.5rem !default')
        expect(dropdownSpacer).toEqual('.125rem !default')
        expect(dropdownBg).toEqual(white)
        expect(dropdownBorderColor).toEqual(format('{} !default', rgba(black, .15)))
        expect(dropdownBorderRadius).toEqual(borderRadius)
        expect(dropdownBorderWidth).toEqual(borderWidth)
        expect(dropdownDividerBg).toEqual(grays._200)
        expect(dropdownBoxShadow).toEqual(format('0 .5rem 1rem {} !default',rgba(black, .175)))

        
        expect(dropdownLinkColor).toEqual(grays._900)
        expect(dropdownLinkHoverColor).toEqual(format('{} !default', darken(grays._900, '5%')))
        expect(dropdownLinkHoverBg).toEqual(grays._100)
        
        expect(dropdownLinkActiveColor).toEqual(componentActiveColor)
        expect(dropdownLinkActiveBg).toEqual(componentActiveBg)
        
        expect(dropdownLinkDisabledColor).toEqual(grays._600)
        
        expect(dropdownItemPaddingY).toEqual('.25rem !default')
        expect(dropdownItemPaddingX).toEqual('1.5rem !default')
        
        expect(dropdownHeaderColor).toEqual(grays._600)
        
    })
})


