import { gridGutterWidth, containerMaxWidths, gridBreakpoints } from '../Variables/Grid'
import { mediaBreakpointUp } from './breakpoints'

export const makeContainer = {
  width: '100%',
  paddingRight: gridGutterWidth / 2,
  paddingLeft: gridGutterWidth / 2,
  marginRight: 'auto',
  marginLeft: 'auto'
}

export const makeContainerMaxWidths = (maxWidths = containerMaxWidths, breakpoints = gridBreakpoints) => {
  let expectValue = {}
  for (const [breakpint, containerMaxWidth] of Object.entries(maxWidths)) {
    expectValue = {
      ...expectValue,
      ...mediaBreakpointUp(breakpint, breakpoints, { maxWidth: containerMaxWidth })
    }
  }
  return expectValue
}
