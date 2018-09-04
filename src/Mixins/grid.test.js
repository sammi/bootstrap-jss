import { gridGutterWidth, containerMaxWidths, gridBreakpoints } from '../Variables/Grid'
import { mediaBreakpointUp } from './breakpoints'

import { makeContainer, makeContainerMaxWidths } from './grid'

describe('Grid system, Generate semantic grid columns with these mixins.', () => {
  it('make-container', () => {
    expect(makeContainer).toEqual({
      width: '100%',
      paddingRight: gridGutterWidth / 2,
      paddingLeft: gridGutterWidth / 2,
      marginRight: 'auto',
      marginLeft: 'auto'
    })
  })

  it('make-container-max-widths, default values', () => {
    const maxWidths = containerMaxWidths
    const breakpoints = gridBreakpoints
    let expectValue = {}
    for (const [breakpint, containerMaxWidth] of Object.entries(maxWidths)) {
      expectValue = {
        ...expectValue,
        ...mediaBreakpointUp(breakpint, breakpoints, { maxWidth: containerMaxWidth })
      }
    }
    expect(makeContainerMaxWidths()).toEqual(expectValue)
  })

  it('make-container-max-widths, default values', () => {
    const maxWidths = {sm: '100px'}
    const breakpoints = {sm: '576px'}
    let expectValue = {}
    for (const [breakpint, containerMaxWidth] of Object.entries(maxWidths)) {
      expectValue = {
        ...expectValue,
        ...mediaBreakpointUp(breakpint, breakpoints, { maxWidth: containerMaxWidth })
      }
    }
    expect(makeContainerMaxWidths(maxWidths, breakpoints)).toEqual(expectValue)
  })
})
