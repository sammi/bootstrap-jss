import {clearfix} from './clearfix'

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