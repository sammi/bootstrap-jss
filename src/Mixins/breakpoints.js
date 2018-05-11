import {size} from '../Functions/size'

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
  return nextName ? (breakpoints[nextName] ? breakpoints[nextName] : null) : null
}
