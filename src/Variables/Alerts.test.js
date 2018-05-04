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
        expect(alertPaddingY).toEqual('.75rem')
        expect(alertPaddingX).toEqual('1.25rem')
        expect(alertMarginBottom).toEqual('1rem')
        expect(alertBorderRadius).toEqual(borderRadius)
        expect(alertLinkFontWeight).toEqual(fontWeightBold)
        expect(alertBorderWidth).toEqual(borderWidth)

        expect(alertBgLevel).toEqual('-10')
        expect(alertBorderLevel).toEqual('-9')
        expect(alertColorLevel).toEqual('6')
    })
})
