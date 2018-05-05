import {gradientBg, alertVariant} from './gradients'
describe('Gradients', () => {
    it('Gradients', () => {
        expect(gradientBg('#000')).toEqual({"background-color":"#000"})
        expect(gradientBg('#000', true)).toEqual({"background": "#000 linear-gradient(180deg, #262626, #000) repeat-x"})
    })
})
