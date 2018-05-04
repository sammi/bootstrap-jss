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
        expect(cardSpacerY).toEqual('.75rem')
        expect(cardSpacerX).toEqual('1.25rem')
        expect(cardBorderWidth).toEqual(borderWidth)
        expect(cardBorderRadius).toEqual(borderRadius)
        expect(cardBorderColor).toEqual(format('{}', rgba(black, .125)))
        expect(cardInnerBorderRadius).toEqual(format('{}{}',
            size(cardBorderRadius).value - size(cardBorderWidth).value,
            size(cardBorderRadius).unit
        ))

        expect(cardCapBg).toEqual(format('{}', rgba(black, .03)))
        expect(cardBg).toEqual(white)

        expect(cardImgOverlayPadding).toEqual('1.25rem')

        expect(cardGroupMargin).toEqual(format('{}{}', size(gridGutterWidth).value / 2, size(gridGutterWidth).unit))

        expect(cardDeckMargin).toEqual(cardGroupMargin)

        expect(cardColumnsCount).toEqual('3')
        expect(cardColumnsGap).toEqual('1.25rem')
        expect(cardColumnsMargin).toEqual(cardSpacerY)
    })
})
