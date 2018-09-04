import { gridGutterWidth, containerMaxWidths, gridBreakpoints, gridColumns } from '../Variables/Grid'
import { mediaBreakpointUp } from './breakpoints'
import { size } from '../Functions/size'
import percentValue from 'percent-value'

import { makeContainer, makeContainerMaxWidths, makeRow, makeColReady, makeCol, makeColOffset } from './grid'

describe('Grid system, Generate semantic grid columns with these mixins.', () => {

  const gridGutterWidthSize = size(gridGutterWidth)

  it('make-container', () => {
    expect(makeContainer).toEqual({
      width: '100%',
      paddingRight: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
      paddingLeft: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
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
    const maxWidths = { sm: '100px' }
    const breakpoints = { sm: '576px' }
    let expectValue = {}
    for (const [breakpint, containerMaxWidth] of Object.entries(maxWidths)) {
      expectValue = {
        ...expectValue,
        ...mediaBreakpointUp(breakpint, breakpoints, { maxWidth: containerMaxWidth })
      }
    }
    expect(makeContainerMaxWidths(maxWidths, breakpoints)).toEqual(expectValue)
  })
  it('make-row', () => {
    expect(makeRow).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: `${gridGutterWidthSize.value / -2}${gridGutterWidthSize.unit}`,
      marginLeft: `${gridGutterWidthSize.value / -2}${gridGutterWidthSize.unit}`
    })
  })

  it('make-col-ready', () => {
    expect(makeColReady).toEqual({
      position: 'relative',
      width: '100%',
      minHeight: '1px',
      paddingRight: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
      paddingLeft: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`
    })
  })
  it('make-col', () => {
    const colSize = 1
    const columns = gridColumns
    const percentage = percentValue(colSize / columns).of(1).toFixed(2)
    expect(makeCol(colSize)).toEqual({
      flex: `0 0 ${percentage}%`,
      maxWidth: `${percentage}%`
    })
    expect(makeCol(colSize, columns)).toEqual({
      flex: `0 0 ${percentage}%`,
      maxWidth: `${percentage}%`
    })
  })

  it('make-col-offset', () => {
    const colSize = 1
    const columns = gridColumns
    const percentage = percentValue(colSize / columns).of(1).toFixed(2)
    expect(makeColOffset(colSize)).toEqual({
      marginLeft: `${percentage}%`
    })
    expect(makeColOffset(colSize, columns)).toEqual({
      marginLeft: `${percentage}%`
    })
    expect(makeColOffset(0, columns)).toEqual({
      marginLeft: 0
    })
  })
})
