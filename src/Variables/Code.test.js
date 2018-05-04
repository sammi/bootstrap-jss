import {grays, pink, white} from './Colors'

import {
    codeFontSize,
    codeColor,    
    kbdPaddingY,
    kbdPaddingX,
    kbdFontSize,
    kbdColor,
    kbdBg,    
    preColor,
    preScrollableMaxHeight
} from './Code'

describe('Code', () => {
    it('Code', () => {
        expect(codeFontSize).toEqual('87.5% !default')
        expect(codeColor).toEqual(pink)

        expect(kbdPaddingY).toEqual('.2rem !default')
        expect(kbdPaddingX).toEqual('.4rem !default')
        expect(kbdFontSize).toEqual(codeFontSize)
        expect(kbdColor).toEqual(white)
        expect(kbdBg).toEqual(grays._900)

        expect(preColor).toEqual(grays._900)
        expect(preScrollableMaxHeight).toEqual('340px !default')
    })
})
