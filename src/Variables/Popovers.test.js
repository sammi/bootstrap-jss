import { fontSizeSm, headingsColor } from './Fonts'
import { white, black } from './Colors'
import { borderWidth, borderRadiusLg } from './Components'
import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'
import { bodyColor } from './Body'
import {fadeIn} from '../Functions/fadeIn'

import {
    popoverFontSize,
    popoverBg,
    popoverMaxWidth,
    popoverBorderWidth,
    popoverBorderColor,
    popoverBorderRadius,
    popoverBoxShadow,

    popoverHeaderBg,
    popoverHeaderColor,
    popoverHeaderPaddingY,
    popoverHeaderPaddingX,

    popoverBodyColor,
    popoverBodyPaddingY,
    popoverBodyPaddingX,

    popoverArrowWidth,
    popoverArrowHeight,
    popoverArrowColor,

    popoverArrowOuterColor
} from './Popovers'

describe('Popovers', () => {
    it('Popovers', () => {
        expect(popoverFontSize).toEqual(fontSizeSm)
        expect(popoverBg).toEqual(white)
        expect(popoverMaxWidth).toEqual('276px !default')
        expect(popoverBorderWidth).toEqual(borderWidth)
        expect(popoverBorderColor).toEqual(format('{} !default', rgba(black, .2)))
        expect(popoverBorderRadius).toEqual(borderRadiusLg)
        expect(popoverBoxShadow).toEqual(format('0 .25rem .5rem {} !default', rgba(black, .2)))

        expect(popoverHeaderBg).toEqual(format('{} !default', darken(popoverBg, '3%')))
        expect(popoverHeaderColor).toEqual(headingsColor)
        expect(popoverHeaderPaddingY).toEqual('.5rem !default')
        expect(popoverHeaderPaddingX).toEqual('.75rem !default')

        expect(popoverBodyColor).toEqual(bodyColor)
        expect(popoverBodyPaddingY).toEqual(popoverHeaderPaddingY)
        expect(popoverBodyPaddingX).toEqual(popoverHeaderPaddingX)

        expect(popoverArrowWidth).toEqual('1rem !default')
        expect(popoverArrowHeight).toEqual('.5rem !default')
        expect(popoverArrowColor).toEqual(popoverBg)

        expect(popoverArrowOuterColor).toEqual(format('{} !default', fadeIn(popoverBorderColor, .05)))
    })
})
