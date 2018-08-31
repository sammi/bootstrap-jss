import { textEmphasisVariant } from './textEmphasis'
import { hoverFocus } from './hover'

describe('Typography', () => {
  it('textEmphasisVariant', () => {
    const parent = 'parentId'
    const color = 'red'
    const parentSelector = `#${parent}`
    const achorSelector = `a#${parent}`

    let expectValue = {}
    expectValue[parentSelector] = { color: `${color} !important` }
    expectValue[achorSelector] = { ...hoverFocus() }

    expect(textEmphasisVariant(parent, color)).toEqual(expectValue)
  })
})
