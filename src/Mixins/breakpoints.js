import {size} from '../Functions/size'
import format from 'string-format'

export const breakpointNext = (name, breakpoints) => {
  let breakPointList = []
  Object.keys(breakpoints).map(name => { breakPointList.push({name, value: breakpoints[name]}) })
  const sortBreakPointList = breakPointList.sort((a, b) => size(a.value).value > size(b.value).value)

  let namePosition = -1
  sortBreakPointList.forEach((b, i) => { namePosition = (b.name === name && i < sortBreakPointList.length) ? i + 1 : namePosition })

  return sortBreakPointList[namePosition] ? sortBreakPointList[namePosition].name : false
}

export const breakpointMin = (name, breakpoints) => {
  return breakpoints[name] ? breakpoints[name] : null
}

export const breakpointMax = (name, breakpoints) => {
  const nextName = breakpointNext(name, breakpoints)
  return nextName ? breakpoints[nextName] : null
}

export const breakpointInfix = (name, breakpoints) => breakpointMin(name, breakpoints) === null ? '' : '-' + name

export const mediaBreakpointUp = (name, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(name, breakpoints)
  if (minWidth === null) {
    return contentStyle
  } else {
    let mediaQuery = {}
    mediaQuery[format('@media (min-width: {})', minWidth)] = contentStyle
    return mediaQuery
  }
}

export const mediaBreakpointDown = (name, breakpoints, contentStyle) => {
  const maxWidth = breakpointMax(name, breakpoints)
  if (maxWidth === null) {
    return contentStyle
  } else {
    let mediaQuery = {}
    mediaQuery[format('@media (max-width: {})', maxWidth)] = contentStyle
    return mediaQuery
  }
}

export const mediaBreakpointsBetween = (lower, upper, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(lower, breakpoints)
  const maxWidth = breakpointMax(upper, breakpoints)
  let mediaQuery = {}
  if (minWidth !== null && maxWidth !== null) {
    mediaQuery[format('@media (min-width: {}) and (max-width: {})', minWidth, maxWidth)] = contentStyle
    return mediaQuery
  } else if (maxWidth === null && minWidth !== null) {
    return mediaBreakpointUp(lower, breakpoints, contentStyle)
  } else if (minWidth === null && maxWidth !== null) {
    return mediaBreakpointDown(upper, breakpoints, contentStyle)
  } else {
    return contentStyle
  }
}

export const mediaBreakpointsOnly = (name, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(name, breakpoints)
  const maxWidth = breakpointMax(name, breakpoints)
  let mediaQuery = {}
  if (minWidth !== null && maxWidth !== null) {
    mediaQuery[format('@media (min-width: {}) and (max-width: {})', minWidth, maxWidth)] = contentStyle
    return mediaQuery
  } else if (maxWidth === null && minWidth !== null) {
    return mediaBreakpointUp(name, breakpoints, contentStyle)
  } else if (minWidth === null && maxWidth !== null) {
    return mediaBreakpointDown(name, breakpoints, contentStyle)
  } else {
    return contentStyle
  }
}
