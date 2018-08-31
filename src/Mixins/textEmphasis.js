import { hoverFocus } from './hover'

export const textEmphasisVariant = (parent, color) => {
  const parentSelector = `#${parent}`
  const achorSelector = `a#${parent}`

  let expectValue = {}
  expectValue[parentSelector] = { color: `${color} !important` }
  expectValue[achorSelector] = { ...hoverFocus() }

  return expectValue
}
