import {gridBreakpoints} from './Grid'

import {
    printPageSize,
    printBodyMinWidth
} from './Printing'

describe('Printing', () => {
    it('Printing', () => {
        expect(printPageSize).toEqual('a3 !default')
        expect(printBodyMinWidth).toEqual(gridBreakpoints.lg)
    })
})
