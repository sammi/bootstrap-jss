import {fontWeightBold} from './Fonts'
import {borderRadius} from './Components'

import {
    badgeFontSize,
    badgeFontWeight,
    badgePaddingY,
    badgePaddingX,
    badgeBorderRadius,
    badgePillPaddingX,
    badgePillBorderRadius
} from './Badges'

describe('Badges', () => {
    it('Badges', () => {
        expect(badgeFontSize).toEqual('75% !default')
        expect(badgeFontWeight).toEqual(fontWeightBold)
        expect(badgePaddingY).toEqual('.25em !default')
        expect(badgePaddingX).toEqual('.4em !default')
        expect(badgeBorderRadius).toEqual(borderRadius)
        expect(badgePillPaddingX).toEqual('.6em !default')
        expect(badgePillBorderRadius).toEqual('10rem !default')
    })
})
