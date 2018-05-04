import {linkColor, linkHoverColor} from './Links'
import {white, grays} from './Colors'
import {borderWidth, componentActiveColor, componentActiveBg} from './Components'
import {inputBtnFocusBoxShadow} from './InputButtons'

import {
    paginationPaddingY,
    paginationPaddingX,
    paginationPaddingYSm,
    paginationPaddingXSm,
    paginationPaddingYLg,
    paginationPaddingXLg,
    paginationLineHeight,
    paginationColor,
    paginationBg,
    paginationBorderWidth,
    paginationBorderColor,
    paginationFocusBoxShadow,
    paginationFocusOutline,
    paginationHoverColor,
    paginationHoverBg,
    paginationHoverBorderColor,
    paginationActiveColor,
    paginationActiveBg,
    paginationActiveBorderColor,
    paginationDisabledColor,
    paginationDisabledBg,
    paginationDisabledBorderColor
} from './Pagination'

describe('Pagination', () => {
    it('Pagination', () => {
        expect(paginationPaddingY).toEqual('.5rem')
        expect(paginationPaddingX).toEqual('.75rem')
        expect(paginationPaddingYSm).toEqual('.25rem')
        expect(paginationPaddingXSm).toEqual('.5rem')
        expect(paginationPaddingYLg).toEqual('.75rem')
        expect(paginationPaddingXLg).toEqual('1.5rem')
        expect(paginationLineHeight).toEqual('1.25')

        expect(paginationColor).toEqual(linkColor)
        expect(paginationBg).toEqual(white)
        expect(paginationBorderWidth).toEqual(borderWidth)
        expect(paginationBorderColor).toEqual(grays._300)

        expect(paginationFocusBoxShadow).toEqual(inputBtnFocusBoxShadow)
        expect(paginationFocusOutline).toEqual(0)

        expect(paginationHoverColor).toEqual(linkHoverColor)
        expect(paginationHoverBg).toEqual(grays._200)
        expect(paginationHoverBorderColor).toEqual(grays._300)

        expect(paginationActiveColor).toEqual(componentActiveColor)
        expect(paginationActiveBg).toEqual(componentActiveBg)
        expect(paginationActiveBorderColor).toEqual(paginationActiveBg)

        expect(paginationDisabledColor).toEqual(grays._600)
        expect(paginationDisabledBg).toEqual(white)
        expect(paginationDisabledBorderColor).toEqual(grays._300)

    })
})