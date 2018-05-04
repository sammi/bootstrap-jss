import {lineHeightBase} from './Fonts'
import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {componentActiveBg, borderWidth, lineHeightSm, lineHeightLg} from './Components'

import {
    inputBtnPaddingY,
    inputBtnPaddingX,
    inputBtnLineHeight,
    inputBtnFocusWidth,
    inputBtnFocusColor,
    inputBtnFocusBoxShadow,
    inputBtnPaddingYSm,
    inputBtnPaddingXSm,
    inputBtnLineHeightSm,
    inputBtnPaddingYLg,
    inputBtnPaddingXLg,
    inputBtnLineHeightLg,
    inputBtnBorderWidth
} from './InputButtons'

describe('Buttons + Forms', () => {
    it('Shared variables that are reassigned to `input-` and `btn-` specific variables.', () => {
        expect(inputBtnPaddingY).toEqual('.375rem')
        expect(inputBtnPaddingX).toEqual('.75rem')
        expect(inputBtnLineHeight).toEqual(lineHeightBase)
        
        expect(inputBtnFocusWidth).toEqual('.2rem')
        expect(inputBtnFocusColor).toEqual(format('{}', rgba(componentActiveBg, .25)))
        expect(inputBtnFocusBoxShadow).toEqual(format('0 0 0 {} {}', inputBtnFocusWidth, inputBtnFocusColor))
        
        expect(inputBtnPaddingYSm).toEqual('.25rem')
        expect(inputBtnPaddingXSm).toEqual('.5rem')
        expect(inputBtnLineHeightSm).toEqual(lineHeightSm)
        
        expect(inputBtnPaddingYLg).toEqual('.5rem')
        expect(inputBtnPaddingXLg).toEqual('1rem')
        expect(inputBtnLineHeightLg).toEqual(lineHeightLg)
        
        expect(inputBtnBorderWidth).toEqual(borderWidth)
    })
})
