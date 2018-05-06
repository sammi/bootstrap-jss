import {bgVariant, bgGradientVariant} from './backgroundVariant'
describe('Contextual backgrounds', () => {
    it('Contextual backgrounds', () => {
        const parent = 'parentClass'
        expect(bgVariant(parent, '#fff')).toEqual({})
        expect(bgGradientVariant(parent, '#abc')).toEqual({})
    })
})
