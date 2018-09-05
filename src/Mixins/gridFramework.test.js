import { gridColumns, gridGutterWidth, gridBreakpoints } from '../Variables/Grid'
import { size } from '../Functions/size'
import { breakpointInfix, mediaBreakpointUp } from './breakpoints'
import { makeCol, makeColOffset } from './grid'

import { makeGridColumns } from './gridFramework'

describe('Framework grid generation', () => {
  it('make-grid-columns', () => {
    const columns = gridColumns
    const gutterSize = size(gridGutterWidth)
    const breakpoints = gridBreakpoints

    const gridColumn = {
      position: 'relative',
      width: '100%',
      minHeight: '1px',
      paddingRight: `${gutterSize.value / 2}${gutterSize.unit}`,
      paddingLeft: `${gutterSize.value / 2}${gutterSize.unit}`
    }

    let expectValue = {}

    Object.keys(breakpoints).forEach(breakpoint => {
      const infix = breakpointInfix(breakpoint, breakpoints)
      for (let i = 1; i <= columns; i++) {
        expectValue[`col${infix}-${i}`] = gridColumn
      }
      expectValue[`col${infix},col${infix}-auto`] = gridColumn

      const mediaBreakpointUpValue = {}

      mediaBreakpointUpValue[`col${infix}`] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      }
      mediaBreakpointUpValue[`col${infix}-auto`] = {
        flex: '0 0 auto',
        width: 'auto',
        maxWidth: 'none'
      }

      for (let i = 1; i <= columns; i++) {
        mediaBreakpointUpValue[`col${infix}-${i}`] = makeCol(i, columns)
      }

      mediaBreakpointUpValue[`order${infix}-first`] = {
        order: -1
      }

      mediaBreakpointUpValue[`order${infix}-last`] = {
        order: columns + 1
      }

      for (let i = 0; i <= columns; i++) {
        mediaBreakpointUpValue[`order${infix}-${i}`] = { order: i }
      }

      for (let i = 0; i <= columns - 1; i++) {
        if (infix !== '' && i !== 0) {
          mediaBreakpointUpValue[`offset${infix}-${i}`] = makeColOffset(i, columns)
        }
      }

      expectValue = {
        ...expectValue,
        ...mediaBreakpointUp(breakpoint, breakpoints, {
          ...mediaBreakpointUpValue
        })
      }
    })

    expect(makeGridColumns()).toEqual(expectValue)
    expect(makeGridColumns(gridColumns, gridGutterWidth, gridBreakpoints)).toEqual(expectValue)
  })
})
