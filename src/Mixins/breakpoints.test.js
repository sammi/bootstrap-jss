import {gridBreakpoints} from '../Variables/Grid'

import {breakpointNext} from './breakpoints'
describe('Breakpoint viewport sizes and media queries.', () => {
    it('breakpoints', () => {

        expect(breakpointNext('sm', 
            {xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px'}
        )).toEqual('md')

        expect(breakpointNext('sm', 
            {xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px'}
        )).toEqual('md')

        expect(breakpointNext('sm', 
            {xs: 0, sm: '576px', xl: '1200px'}, 
        )).toEqual('xl')

        expect(breakpointNext('lg', 
            {xs: 0, sm: '576px', xl: '1200px'}, 
        )).toEqual(false)

        expect(breakpointNext('xl', 
            {xs: 0, sm: '576px', xl: '1200px'}, 
        )).toEqual(false)

        expect(breakpointNext('xs', 
            {xs: 0, sm: '576px', xl: '1200px'}, 
        )).toEqual('sm')

    })
})
