import {mix} from './mix'
describe('mix', () => {
    it('mix', () => {
        expect(mix('#fff', '#000', '15%')).toEqual('#262626')
        expect(mix('#fff', '#000', '25%')).toEqual('#404040')
    })
})
