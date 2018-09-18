import { gridBreakpoints } from '../Variables/Grid'
import { breakpointInfix } from '../Mixins/breakpoints'
import { floatLeft, floatRight, floatNone } from '../Mixins/float'

let floatInfixValue = {}
for (const [breakpoint] of Object.entries(gridBreakpoints)) {
  const infix = breakpointInfix(breakpoint, gridBreakpoints)
  const floatInfixStyle = {}
  floatInfixStyle[`float${infix}Left`] = floatLeft
  floatInfixStyle[`float${infix}Right`] = floatRight
  floatInfixStyle[`float${infix}Left`] = floatNone
  floatInfixValue = {
    ...floatInfixValue,
    ...floatInfixStyle
  }
}

const floatInfix = floatInfixValue

export {
  floatInfix
}
