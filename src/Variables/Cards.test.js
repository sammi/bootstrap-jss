import { grays, white, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { borderWidth, borderRadius } from './Components'
import { gridGutterWidth } from './Grid'
import format from 'string-format'
import {size} from '../Functions/size'

import {
    cardSpacerY,
    cardSpacerX,
    cardBorderWidth,
    cardBorderRadius,
    cardBorderColor,
    cardInnerBorderRadius,
    cardCapBg,
    cardBg,
    cardImgOverlayPadding,
    cardGroupMargin,
    cardDeckMargin,
    cardColumnsCount,
    cardColumnsGap,
    cardColumnsMargin
} from './Cards'

describe('Cards', () => {
    it('Cards', () => {
        expect(cardSpacerY).toEqual('.75rem !default')
        expect(cardSpacerX).toEqual('1.25rem !default')
        expect(cardBorderWidth).toEqual(borderWidth)
        expect(cardBorderRadius).toEqual(borderRadius)
        expect(cardBorderColor).toEqual(format('{} !default', rgba(black, .125)))
        expect(cardInnerBorderRadius).toEqual(format('{}{} !default',
            size(cardBorderRadius).value - size(cardBorderWidth).value,
            size(cardBorderRadius).unit
        ))

        expect(cardCapBg).toEqual(format('{} !default', rgba(black, .03)))
        expect(cardBg).toEqual(white)

        expect(cardImgOverlayPadding).toEqual('1.25rem !default')

        expect(cardGroupMargin).toEqual(format('{}{} !default', size(gridGutterWidth).value / 2, size(gridGutterWidth).unit))

        expect(cardDeckMargin).toEqual(cardGroupMargin)

        expect(cardColumnsCount).toEqual('3 !default')
        expect(cardColumnsGap).toEqual('1.25rem !default')
        expect(cardColumnsMargin).toEqual(cardSpacerY)
    })
})
