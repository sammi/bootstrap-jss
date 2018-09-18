import { gridBreakpoints } from '../Variables/Grid'
import { breakpointInfix } from '../Mixins/breakpoints'

import { displayInfix, displayPrint } from './Display'

describe('display', () => {
  it('displayInfix', () => {
    let expectValue = {}
    for (const [breakpoint] of Object.entries(gridBreakpoints)) {
      const infix = breakpointInfix(breakpoint, gridBreakpoints)
      expectValue[`d${infix}-none`] = { display: 'none !important' }
      expectValue[`d${infix}-inline`] = { display: 'inline !important' }
      expectValue[`d${infix}-inline-block`] = { display: 'inline-block !important' }
      expectValue[`d${infix}-block`] = { display: 'block !important' }
      expectValue[`d${infix}-table`] = { display: 'table !important' }
      expectValue[`d${infix}-table-row`] = { display: 'table-row !important' }
      expectValue[`d${infix}-table-cell`] = { display: 'table-cell !important' }
      expectValue[`d${infix}-flex`] = { display: 'flex !important' }
      expectValue[`d${infix}-inline-flex`] = { display: 'inline-flex !important' }
    }
    expect(displayInfix).toEqual(expectValue)
  })

  it('displayPrint', () => {
    expect(displayPrint).toEqual({
      '@media print': {
        dPrintNone: { display: 'none !important' },
        dPrintInline: { display: 'inline !important' },
        dPrintInlineBlock: { display: 'inline-block !important' },
        dPrintBlock: { display: 'block !important' },
        dPrintTable: { display: 'table !important' },
        dPrintTableRow: { display: 'table-row !important' },
        dPrintTableCell: { display: 'table-cell !important' },
        dPrintFlex: { display: 'flex !important' },
        dPrintInlineFlex: { display: 'inline-flex !important' }
      }
    })
  })
})
