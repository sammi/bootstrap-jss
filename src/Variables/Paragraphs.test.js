import {paragraphMarginBottom} from './Paragraphs'

describe('Paragraphs', () => {

    it('Style p element.', () => {
        expect(paragraphMarginBottom).toEqual('1rem !default')
    })
})