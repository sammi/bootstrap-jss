import { gridGutterWidth, containerMaxWidths, gridBreakpoints, gridColumns } from '../Variables/Grid'
import { size } from '../Functions/size'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import percentValue from 'percent-value'
import { makeContainer, makeContainerMaxWidths, makeRow, makeColReady, makeCol, makeColOffset } from './Grid'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Grid system', () => {
  const gridGuztterWidthSize = size(gridGutterWidth)

  it('make-container', () => {
    expect(makeContainer).toEqual({
      width: '100%',
      paddingRight: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
      paddingLeft: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
      marginRight: 'auto',
      marginLeft: 'auto'
    })
    expect(jss.createStyleSheet({ makeContainer }).toString()).toBeDefined()
  })

  it('make-container-max-widths', () => {
    const maxWidths = containerMaxWidths
    const breakpoints = gridBreakpoints
    let expectValue = {}
    for (const [breakpoint, containerMaxWidth] of Object.entries(maxWidths)) {
      expectValue = {
        ...expectValue,
        ...mediaBreakpointUp(breakpoint, breakpoints, {
          maxWidth: containerMaxWidth
        })
      }
    }

    expect(makeContainerMaxWidths()).toEqual(expectValue)
    expect(jss.createStyleSheet({ makeContainerMaxWidths: { ...makeContainerMaxWidths() } }).toString()).toBeDefined()
    expect(makeContainerMaxWidths(containerMaxWidths, gridBreakpoints)).toEqual(expectValue)
    expect(jss.createStyleSheet({ makeContainerMaxWidths: { ...makeContainerMaxWidths(containerMaxWidths, gridBreakpoints) } }).toString()).toBeDefined()
  })

  it('make-row', () => {
    expect(makeRow).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: `${gridGuztterWidthSize.value / -2}${gridGuztterWidthSize.unit}`,
      marginLeft: `${gridGuztterWidthSize.value / -2}${gridGuztterWidthSize.unit}`
    })
    expect(jss.createStyleSheet({ makeRow }).toString()).toBeDefined()
  })

  it('make-col-ready', () => {
    expect(makeColReady).toEqual({
      position: 'relative',
      width: '100%',
      paddingRight: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
      paddingLeft: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`
    })
    expect(jss.createStyleSheet({ makeColReady }).toString()).toBeDefined()
  })

  it('make-col', () => {
    const makeColSize = 1
    const columns = gridColumns
    const percentage = percentValue(makeColSize / columns).of(1).toFixed(2)
    expect(makeCol(makeColSize, columns)).toEqual({
      flex: `0 0 ${percentage}%`,
      maxWidth: `${percentage}%`
    })
    expect(jss.createStyleSheet({ makeCol: { ...makeCol(makeColSize, columns) } }).toString()).toBeDefined()

    expect(makeCol(makeColSize)).toEqual({
      flex: `0 0 ${percentage}%`,
      maxWidth: `${percentage}%`
    })
    expect(jss.createStyleSheet({ makeCol: { ...makeCol(makeColSize) } }).toString()).toBeDefined()
  })

  it('make-col-offset', () => {
    const makeColSize = 1
    const columns = gridColumns
    const num = makeColSize / columns
    const percentage = percentValue(num).of(1).toFixed(2)
    expect(makeColOffset(makeColSize, columns)).toEqual({
      marginLeft: `${percentage}%`
    })
    expect(jss.createStyleSheet({ makeColOffset: { ...makeColOffset(makeColSize, columns) } }).toString()).toBeDefined()

    expect(makeColOffset(makeColSize)).toEqual({
      marginLeft: `${percentage}%`
    })
    expect(jss.createStyleSheet({ makeColOffset: { ...makeColOffset(makeColSize) } }).toString()).toBeDefined()

    expect(makeColOffset(0)).toEqual({
      marginLeft: 0
    })
    expect(jss.createStyleSheet({ makeColOffset: { ...makeColOffset(0) } }).toString()).toBeDefined()
  })
})
