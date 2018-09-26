import {
  breakpointNext,
  breakpointMin,
  breakpointMax,
  breakpointInfix,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointsBetween,
  mediaBreakpointsOnly
} from './breakpoints'

describe('Breakpoint viewport sizes and media queries.', () => {
  it('breakpointNext', () => {
    expect(breakpointNext('sm',
      { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' }
    )).toEqual('md')

    expect(breakpointNext('sm',
      { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    )).toEqual('md')

    expect(breakpointNext('sm',
      { xs: 0, sm: '576px', xl: '1200px' }
    )).toEqual('xl')

    expect(breakpointNext('lg',
      { xs: 0, sm: '576px', xl: '1200px' }
    )).toEqual(false)

    expect(breakpointNext('xl',
      { xs: 0, sm: '576px', xl: '1200px' }
    )).toEqual(false)

    expect(breakpointNext('xs',
      { xs: 0, sm: '576px', xl: '1200px' }
    )).toEqual('sm')
  })

  it('breakpointMin', () => {
    expect(breakpointMin('sm',
      { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' }
    )).toEqual('576px')

    expect(breakpointMin('xs',
      { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    )).toEqual(null)
  })

  it('breakpointMax', () => {
    expect(breakpointMax('sm',
      { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' }
    )).toEqual('768px')

    expect(breakpointMax('xs',
      { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    )).toEqual('576px')

    expect(breakpointMax('xl',
      { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    )).toEqual(null)
  })

  it('breakpointInfix', () => {
    expect(breakpointInfix('xs', { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' })).toEqual('')
    expect(breakpointInfix('sm', { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' })).toEqual('-sm')
    expect(breakpointInfix('xl', { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' })).toEqual('-xl')
  })

  it('mediaBreakpointUp', () => {
    const breakpoints = { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    const contentStyles = { color: 'red' }
    expect(mediaBreakpointUp('xs', breakpoints, contentStyles)).toEqual(contentStyles)

    let mediaQuery = {}
    mediaQuery['@media (min-width: 576px)'] = contentStyles

    expect(mediaBreakpointUp('sm', breakpoints, contentStyles)).toEqual(mediaQuery)
  })

  it('mediaBreakpointDown', () => {
    const breakpoints = { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    const contentStyles = { color: 'red' }
    expect(mediaBreakpointDown('xl', breakpoints, contentStyles)).toEqual(contentStyles)

    let mediaQuery = {}
    mediaQuery['@media (max-width: 768px)'] = contentStyles
    expect(mediaBreakpointDown('sm', breakpoints, contentStyles)).toEqual(mediaQuery)
  })

  it('mediaBreakpointsBetween', () => {
    const breakpoints = { xs: 0, sm: '576px', lg: '992px', xl: '1200px', md: '768px' }
    const contentStyles = { color: 'red' }

    let mediaQuery = {}
    mediaQuery['@media (max-width: 768px)'] = contentStyles
    expect(mediaBreakpointsBetween('xs', 'sm', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 576px) and (max-width: 1200px)'] = contentStyles
    expect(mediaBreakpointsBetween('sm', 'lg', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 576px) and (max-width: 768px)'] = contentStyles
    expect(mediaBreakpointsBetween('sm', 'sm', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 576px)'] = contentStyles
    expect(mediaBreakpointsBetween('sm', 'xl', breakpoints, contentStyles)).toEqual(mediaQuery)

    expect(mediaBreakpointsBetween('xs', 'xl', breakpoints, contentStyles)).toEqual(contentStyles)

    expect(mediaBreakpointsBetween('xss', 'xll', breakpoints, contentStyles)).toEqual(contentStyles)
  })

  it('mediaBreakpointsOnly', () => {
    const breakpoints = { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' }
    const contentStyles = { color: 'red' }

    let mediaQuery = {}
    mediaQuery['@media (max-width: 576px)'] = contentStyles
    expect(mediaBreakpointsOnly('xs', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 576px) and (max-width: 768px)'] = contentStyles
    expect(mediaBreakpointsOnly('sm', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 1200px)'] = contentStyles
    expect(mediaBreakpointsOnly('xl', breakpoints, contentStyles)).toEqual(mediaQuery)

    mediaQuery = {}
    mediaQuery['@media (min-width: 992px) and (max-width: 1200px)'] = contentStyles
    expect(mediaBreakpointsOnly('lg', breakpoints, contentStyles)).toEqual(mediaQuery)

    expect(mediaBreakpointsOnly('lgg', breakpoints, contentStyles)).toEqual(contentStyles)
  })
})
