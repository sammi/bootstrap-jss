import { gridGutterWidth, containerMaxWidths, gridBreakpoints, gridColumns } from '../Variables/Grid'
import { mediaBreakpointUp } from './breakpoints'
import { size } from '../Functions/size'
import percentValue from 'percent-value'

const gridGutterWidthSize = size(gridGutterWidth)

export const makeContainer = {
  width: '100%',
  paddingRight: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
  paddingLeft: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
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

export const makeRow = {
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: `${gridGutterWidthSize.value / -2}${gridGutterWidthSize.unit}`,
  marginLeft: `${gridGutterWidthSize.value / -2}${gridGutterWidthSize.unit}`
}

export const makeColReady = {
  position: 'relative',
  width: '100%',
  minHeight: '1px',
  paddingRight: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`,
  paddingLeft: `${gridGutterWidthSize.value / 2}${gridGutterWidthSize.unit}`
}

export const makeCol = (colSize, columns = gridColumns) => {
  const percentage = percentValue(colSize / columns).of(1).toFixed(2)
  return {
    flex: `0 0 ${percentage}%`,
    maxWidth: `${percentage}%`
  }
}

export const makeColOffset = (colSize, columns = gridColumns) => {
  const percentage = percentValue(colSize / columns).of(1).toFixed(2)
  return {
    marginLeft: colSize / columns === 0 ? 0 : `${percentage}%`
  }
}
