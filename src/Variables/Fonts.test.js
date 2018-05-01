import { spacer } from './Spacing'
import { grays, black } from './Colors'
import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { size } from '../Functions/size'
import { borderWidth } from './Components'

import {
    fontFamilySansSerif,
    fontFamilyMonospace,
    fontFamilyBase,
    fontSizeBase,
    fontSizeLg,
    fontSizeSm,
    fontWeightLight,
    fontWeightNormal,
    fontWeightBold,
    fontWeightBase,
    lineHeightBase,
    h1FontSize,
    h2FontSize,
    h3FontSize,
    h4FontSize,
    h5FontSize,
    h6FontSize,
    headingsMarginBottom,
    headingsFontFamily,
    headingsFontWeight,
    headingsLineHeight,
    headingsColor,
    display1Size,
    display2Size,
    display3Size,
    display4Size,
    display1Weight,
    display2Weight,
    display3Weight,
    display4Weight,
    displayLineHeight,
    leadFontSize,
    leadFontWeight,
    smallFontSize,
    textMuted,
    blockquoteSmallColor,
    blockquoteFontSize,
    hrBorderColor,
    hrBorderWidth,
    markPadding,
    dtFontWeight,
    kbdBoxShadow,
    nestedKbdFontWeight,
    listInlinePadding,
    markBg,
    hrMarginY
} from './Fonts'

describe('Fonts', () => {

    it('Font Family', () => {
        expect(fontFamilySansSerif).toEqual('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default')
        expect(fontFamilyMonospace).toEqual('SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default')
        expect(fontFamilyBase).toEqual(fontFamilySansSerif)
    })

    it('Font Size', () => {
        expect(fontSizeBase).toEqual('1rem !default')
        expect(fontSizeLg).toEqual('1.25rem !default')
        expect(fontSizeSm).toEqual('0.875rem !default')
    })

    it('Font Weight', () => {
        expect(fontWeightLight).toEqual('300 !default')
        expect(fontWeightNormal).toEqual('400 !default')
        expect(fontWeightBold).toEqual('700 !default')
        expect(fontWeightBase).toEqual(fontWeightNormal)
        expect(lineHeightBase).toEqual('1.5 !default')
    })

    it('Font Headers', () => {
        expect(h1FontSize).toEqual('2.5rem !default')
        expect(h2FontSize).toEqual('2rem !default')
        expect(h3FontSize).toEqual('1.75rem !default')
        expect(h4FontSize).toEqual('1.5rem !default')
        expect(h5FontSize).toEqual('1.25rem !default')
        expect(h6FontSize).toEqual(fontSizeBase)

        expect(headingsMarginBottom).toEqual(fontSizeBase)
        expect(headingsFontFamily).toEqual('inherit !default')
        expect(headingsFontWeight).toEqual('500 !default')
        expect(headingsLineHeight).toEqual('1.2 !default')
        expect(headingsColor).toEqual('inherit !default')
    })

    it('Display', () => {
        expect(display1Size).toEqual('6rem !default')
        expect(display2Size).toEqual('5.5rem !default')
        expect(display3Size).toEqual('4.5rem !default')
        expect(display4Size).toEqual('3.5rem !default')

        expect(display1Weight).toEqual('300 !default')
        expect(display2Weight).toEqual('300 !default')
        expect(display3Weight).toEqual('300 !default')
        expect(display4Weight).toEqual('300 !default')
        expect(displayLineHeight).toEqual(headingsLineHeight)
    })

    it('Lead', () => {
        expect(leadFontSize).toEqual('1.25rem !default')
        expect(leadFontWeight).toEqual('300 !default')
    })

    it('Small Font', () => {
        expect(smallFontSize).toEqual('80% !default')
    })

    it('Misc', () => {
        expect(textMuted).toEqual(grays._600)
        expect(blockquoteSmallColor).toEqual(grays._600)
        expect(blockquoteFontSize).toEqual('1.25rem !default')
        expect(hrBorderColor).toEqual(format('{} !default', rgba(black, .1)))
        expect(hrBorderWidth).toEqual(borderWidth)
        expect(markPadding).toEqual('.2em !default')
        expect(dtFontWeight).toEqual(fontWeightBold)


        expect(kbdBoxShadow).toEqual(format('inset 0 -.1rem 0 {} !default', rgba(black, .25)))
        expect(nestedKbdFontWeight).toEqual(fontWeightBold)
        expect(listInlinePadding).toEqual('.5rem !default')
        expect(markBg).toEqual('#fcf8e3 !default')
        expect(hrMarginY).toEqual(spacer)

    })

})