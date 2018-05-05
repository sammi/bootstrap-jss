import {gradientBg, alertVariant} from './Alert'
describe('Alert', () => {
    it('Alert', () => {
        expect(gradientBg('#000')).toEqual({"background-color":"#000"})
    })
})
