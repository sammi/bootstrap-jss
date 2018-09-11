import { gridGutterWidth, containerMaxWidths, gridBreakpoints, gridColumns } from '../Variables/Grid'
import { size } from '../Functions/size'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import percentValue from 'percent-value'

const gridGuztterWidthSize = size(gridGutterWidth)

export const makeContainer = {
  width: '100%',
  paddingRight: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
  paddingLeft: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
  marginRight: 'auto',
  marginLeft: 'auto'
}

export const makeContainerMaxWidths = (maxWidths = containerMaxWidths, breakpoints = gridBreakpoints) => {
  let expectValue = {}
  for (const [breakpoint, containerMaxWidth] of Object.entries(maxWidths)) {
    expectValue = {
      ...expectValue,
      ...mediaBreakpointUp(breakpoint, breakpoints, {
        maxWidth: containerMaxWidth
      })
    }
  }
  return expectValue
}

export const makeRow = {
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: `${gridGuztterWidthSize.value / -2}${gridGuztterWidthSize.unit}`,
  marginLeft: `${gridGuztterWidthSize.value / -2}${gridGuztterWidthSize.unit}`
}

export const makeColReady = {
  position: 'relative',
  width: '100%',
  paddingRight: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`,
  paddingLeft: `${gridGuztterWidthSize.value / 2}${gridGuztterWidthSize.unit}`
}

export const makeCol = (makeColSize, columns = gridColumns) => {
  const percentage = percentValue(makeColSize / columns).of(1).toFixed(2)
  return {
    flex: `0 0 ${percentage}%`,
    maxWidth: `${percentage}%`
  }
}

export const makeColOffset = (makeColSize, columns = gridColumns) => {
  const num = makeColSize / columns
  const percentage = percentValue(num).of(1).toFixed(2)
  return {
    marginLeft: num === 0 ? 0 : `${percentage}%`
  }
}
