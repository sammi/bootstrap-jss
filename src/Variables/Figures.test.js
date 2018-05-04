import {grays} from './Colors'

import {
    figureCaptionFontSize,
    figureCaptionColor
} from './Figures'

describe('Figures', () => {

    it('Figures', () => {
        expect(figureCaptionFontSize).toEqual('90% !default')
        expect(figureCaptionColor).toEqual(grays._600)
    })

})