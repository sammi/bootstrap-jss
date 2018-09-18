import { gridBreakpoints } from '../Variables/Grid'
import { mediaBreakpointUp, breakpointInfix } from '../Mixins/breakpoints'

import { flexInfix } from './Flex'

describe('flex', () => {
  it('flex infix', () => {
    let flexInfixValue = {}
    for (const [breakpoint] of Object.entries(gridBreakpoints)) {
      const infix = breakpointInfix(breakpoint, gridBreakpoints)
      const breakpointStyle = {}
      breakpointStyle[`flex${infix}Row`] = { flexDirection: 'row !important' }
      breakpointStyle[`flex${infix}Cloumn`] = { flexDirection: 'column !important' }
      breakpointStyle[`flex${infix}RowReverse`] = { flexDirection: 'row-reverse !important' }
      breakpointStyle[`flex${infix}ColumnReverse`] = { flexDirection: 'column-reverse !important' }

      breakpointStyle[`flex${infix}Wrap`] = { flexWrap: 'wrap !important' }
      breakpointStyle[`flex${infix}Nowrap`] = { flexWrap: 'nowrap !important' }
      breakpointStyle[`flex${infix}WrapReverse`] = { flexWrap: 'wrap-reverse !important' }
      breakpointStyle[`flex${infix}Fill`] = { flex: '1 1 auto !important' }
      breakpointStyle[`flex${infix}Grow0`] = { flexGrow: '0 !important' }
      breakpointStyle[`flex${infix}Grow1`] = { flexGrow: '1 !important' }
      breakpointStyle[`flex${infix}Shrink0`] = { flexShrink: '0 !important' }
      breakpointStyle[`flex${infix}Shrink1`] = { flexShrink: '1 !important' }

      breakpointStyle[`justifyContent${infix}Start`] = { flexDirection: 'flex-start !important' }
      breakpointStyle[`justifyContent${infix}End`] = { flexDirection: 'flex-end !important' }
      breakpointStyle[`justifyContent${infix}Center`] = { flexDirection: 'center !important' }
      breakpointStyle[`justifyContent${infix}Between`] = { flexDirection: 'space-between !important' }
      breakpointStyle[`justifyContent${infix}Around`] = { flexDirection: 'space-around !important' }

      breakpointStyle[`alignItems${infix}Start`] = { alignItems: 'flex-start !important' }
      breakpointStyle[`alignItems${infix}End`] = { alignItems: 'flex-end !important' }
      breakpointStyle[`alignItems${infix}Center`] = { alignItems: 'center !important' }
      breakpointStyle[`alignItems${infix}Between`] = { alignItems: 'baseline !important' }
      breakpointStyle[`alignItems${infix}Around`] = { alignItems: 'stretch !important' }

      breakpointStyle[`alignContent${infix}Start`] = { alignContent: 'flex-start !important' }
      breakpointStyle[`alignContent${infix}End`] = { alignContent: 'flex-end !important' }
      breakpointStyle[`alignContent${infix}Center`] = { alignContent: 'center !important' }
      breakpointStyle[`alignContent${infix}Between`] = { alignContent: 'space-between !important' }
      breakpointStyle[`alignContent${infix}Around`] = { alignContent: 'space-around !important' }
      breakpointStyle[`alignContent${infix}Stretch`] = { alignContent: 'stretch !important' }

      breakpointStyle[`alignSelf${infix}Auto`] = { alignSelf: 'auto !important' }
      breakpointStyle[`alignSelf${infix}Start`] = { alignSelf: 'flex-start !important' }
      breakpointStyle[`alignSelf${infix}End`] = { alignSelf: 'flex-end !important' }
      breakpointStyle[`alignSelf${infix}Center`] = { alignSelf: 'center !important' }
      breakpointStyle[`alignSelf${infix}Baseline`] = { alignSelf: 'baseline !important' }
      breakpointStyle[`alignSelf${infix}Stretch`] = { alignSelf: 'stretch !important' }

      flexInfixValue = {
        ...flexInfixValue,
        ...mediaBreakpointUp(breakpoint, breakpointStyle)
      }
    }

    expect(flexInfix).toEqual(flexInfixValue)
  })
})
