import {borderRadius, borderWidth} from './Components'
import {fontWeightBold} from './Fonts'

import {
    alertPaddingY,
    alertPaddingX,
    alertMarginBottom,
    alertBorderRadius,
    alertLinkFontWeight,
    alertBorderWidth,
    alertBgLevel,
    alertBorderLevel,
    alertColorLevel
} from './Alerts'

describe('Define alert colors, border radius, and padding.', () => {
    it('Alerts', () => {
        expect(alertPaddingY).toEqual('.75rem !default')
        expect(alertPaddingX).toEqual('1.25rem !default')
        expect(alertMarginBottom).toEqual('1rem !default')
        expect(alertBorderRadius).toEqual(borderRadius)
        expect(alertLinkFontWeight).toEqual(fontWeightBold)
        expect(alertBorderWidth).toEqual(borderWidth)

        expect(alertBgLevel).toEqual('-10 !default')
        expect(alertBorderLevel).toEqual('-9 !default')
        expect(alertColorLevel).toEqual('6 !default')
    })
})
