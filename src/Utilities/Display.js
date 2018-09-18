import { gridBreakpoints } from '../Variables/Grid'
import { breakpointInfix } from '../Mixins/breakpoints'

const displayInfix = {}

for (const [breakpoint] of Object.entries(gridBreakpoints)) {
  const infix = breakpointInfix(breakpoint, gridBreakpoints)
  displayInfix[`d${infix}-none`] = { display: 'none !important' }
  displayInfix[`d${infix}-inline`] = { display: 'inline !important' }
  displayInfix[`d${infix}-inline-block`] = { display: 'inline-block !important' }
  displayInfix[`d${infix}-block`] = { display: 'block !important' }
  displayInfix[`d${infix}-table`] = { display: 'table !important' }
  displayInfix[`d${infix}-table-row`] = { display: 'table-row !important' }
  displayInfix[`d${infix}-table-cell`] = { display: 'table-cell !important' }
  displayInfix[`d${infix}-flex`] = { display: 'flex !important' }
  displayInfix[`d${infix}-inline-flex`] = { display: 'inline-flex !important' }
}

const displayPrint = {
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
}

export {
  displayInfix,
  displayPrint
}
