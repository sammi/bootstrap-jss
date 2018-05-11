import {breakpointNext, breakpointMin, breakpointMax} from './breakpoints'
describe('Breakpoint viewport sizes and media queries.', () => {
  it('breakpointNext', () => {
    expect(breakpointNext('sm',
      {xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px'}
    )).toEqual('md')

    expect(breakpointNext('sm',
      {xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px'}
    )).toEqual('md')

    expect(breakpointNext('sm',
      {xs: 0, sm: '576px', xl: '1200px'}
    )).toEqual('xl')

    expect(breakpointNext('lg',
      {xs: 0, sm: '576px', xl: '1200px'}
    )).toEqual(false)

    expect(breakpointNext('xl',
      {xs: 0, sm: '576px', xl: '1200px'}
    )).toEqual(false)

    expect(breakpointNext('xs',
      {xs: 0, sm: '576px', xl: '1200px'}
    )).toEqual('sm')
  })

  it('breakpointMin', () => {
    expect(breakpointMin('sm',
      {xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px'}
    )).toEqual('576px')

    expect(breakpointMin('xs',
      {xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px'}
    )).toEqual(null)
  })

  it('breakpointMax', () => {
    expect(breakpointMax('sm',
      {xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px'}
    )).toEqual('768px')

    expect(breakpointMax('xs',
      {xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px'}
    )).toEqual('576px')

    expect(breakpointMax('xl',
      {xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px'}
    )).toEqual(null)
  })
})
