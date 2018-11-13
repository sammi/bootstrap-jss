import { size } from '../Functions/size'

const breakpointNext = (name, breakpoints) => {
  let breakPointList = []
  Object.keys(breakpoints).forEach(name => { breakPointList.push({ name, value: breakpoints[name] }) })
  const sortBreakPointList = breakPointList.sort((a, b) => size(a.value).value > size(b.value).value).map(d => d.value === 0 ? { name: d.name, value: '0px' } : d)

  let namePosition = -1
  sortBreakPointList.forEach((b, i) => { namePosition = (b.name === name && i < sortBreakPointList.length) ? i + 1 : namePosition })

  return sortBreakPointList[namePosition] ? sortBreakPointList[namePosition].name : false
}

const breakpointMin = (name, breakpoints) => {
  return breakpoints[name] ? breakpoints[name] : null
}

const breakpointMax = (name, breakpoints) => {
  const nextName = breakpointNext(name, breakpoints)
  return nextName ? breakpoints[nextName] : null
}

const breakpointInfix = (name, breakpoints) => breakpointMin(name, breakpoints) === null ? '' : '-' + name

const mediaBreakpointUp = (name, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(name, breakpoints)
  if (minWidth === null) {
    return contentStyle
  } else {
    let mediaQuery = {}
    mediaQuery[`@media (min-width: ${minWidth})`] = contentStyle
    return mediaQuery
  }
}

const mediaBreakpointDown = (name, breakpoints, contentStyle) => {
  const maxWidth = breakpointMax(name, breakpoints)
  if (maxWidth === null) {
    return contentStyle
  } else {
    let mediaQuery = {}
    mediaQuery[`@media (max-width: ${maxWidth})`] = contentStyle
    return mediaQuery
  }
}

const mediaBreakpointsBetween = (lower, upper, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(lower, breakpoints)
  const maxWidth = breakpointMax(upper, breakpoints)
  let mediaQuery = {}
  if (minWidth !== null && maxWidth !== null) {
    mediaQuery[`@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`] = contentStyle
    return mediaQuery
  } else if (maxWidth === null && minWidth !== null) {
    return mediaBreakpointUp(lower, breakpoints, contentStyle)
  } else if (minWidth === null && maxWidth !== null) {
    return mediaBreakpointDown(upper, breakpoints, contentStyle)
  } else {
    return contentStyle
  }
}

const mediaBreakpointsOnly = (name, breakpoints, contentStyle) => {
  const minWidth = breakpointMin(name, breakpoints)
  const maxWidth = breakpointMax(name, breakpoints)
  let mediaQuery = {}
  if (minWidth !== null && maxWidth !== null) {
    mediaQuery[`@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`] = contentStyle
    return mediaQuery
  } else if (maxWidth === null && minWidth !== null) {
    return mediaBreakpointUp(name, breakpoints, contentStyle)
  } else if (minWidth === null && maxWidth !== null) {
    return mediaBreakpointDown(name, breakpoints, contentStyle)
  } else {
    return contentStyle
  }
}

export {
  breakpointNext,
  breakpointMin,
  breakpointMax,
  breakpointInfix,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointsBetween,
  mediaBreakpointsOnly
}
