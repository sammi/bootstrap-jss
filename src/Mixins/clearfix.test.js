import {clearfix} from './clearFix'

describe('', () => {
    it('clearfix', () => {
        expect(clearfix).toEqual({
            '&::after': {
                display: 'block',
                clear: 'both',
                content: ""
            }
        })
    })
})