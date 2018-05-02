import {lineHeightBase, lineHeightLg} from './Fonts'
import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {componentActiveBg, borderWidth, lineHeightSm} from './Components'

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
        expect(inputBtnPaddingY).toEqual('.375rem !default')
        expect(inputBtnPaddingX).toEqual('.75rem !default')
        expect(inputBtnLineHeight).toEqual(lineHeightBase)
        
        expect(inputBtnFocusWidth).toEqual('.2rem !default')
        expect(inputBtnFocusColor).toEqual(format('{} !default', rgba(componentActiveBg, .25)))
        expect(inputBtnFocusBoxShadow).toEqual(format('0 0 0 {} {} !default', inputBtnFocusWidth, inputBtnFocusColor))
        
        expect(inputBtnPaddingYSm).toEqual('.25rem !default')
        expect(inputBtnPaddingXSm).toEqual('.5rem !default')
        expect(inputBtnLineHeightSm).toEqual(lineHeightSm)
        
        expect(inputBtnPaddingYLg).toEqual('.5rem !default')
        expect(inputBtnPaddingXLg).toEqual('1rem !default')
        expect(inputBtnLineHeightLg).toEqual(lineHeightLg)
        
        expect(inputBtnBorderWidth).toEqual(borderWidth)
    })
})
