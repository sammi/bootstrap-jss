import {darken} from './darken'

describe('darken', () => {
    it('darken', () => {
        expect(darken('#FFF', '0%')).toEqual('#FFF')
    })
})
