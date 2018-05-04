import {fontSizeSm} from './Fonts'
import {white, black} from './Colors'
import {borderRadius} from './Components'

import {
    tooltipFontSize,
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    tooltipOpacity,
    tooltipPaddingY,
    tooltipPaddingX,
    tooltipMargin,
    tooltipArrowWidth,
    tooltipArrowHeight,
    tooltipArrowColor
} from './Tooltips'

describe('Tooltips', () => {
    it('Tooltips', () => {
        expect(tooltipFontSize).toEqual(fontSizeSm)
        expect(tooltipMaxWidth).toEqual('200px !default')
        expect(tooltipColor).toEqual(white)
        expect(tooltipBg).toEqual(black)
        expect(tooltipBorderRadius).toEqual(borderRadius)
        expect(tooltipOpacity).toEqual('.9 !default')
        expect(tooltipPaddingY).toEqual('.25rem !default')
        expect(tooltipPaddingX).toEqual('.5rem !default')
        expect(tooltipMargin).toEqual('0 !default')
        expect(tooltipArrowWidth).toEqual('.8rem !default')
        expect(tooltipArrowHeight).toEqual('.4rem !default')
        expect(tooltipArrowColor).toEqual(tooltipBg)
    })
})
