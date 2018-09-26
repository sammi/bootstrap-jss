import { colorYiq } from './colorYiq'

import { yiqTextDark, yiqTextLight } from '../Variables/Colors'

describe('colorYiq', () => {
  it('Color contrast', () => {
    expect(colorYiq(yiqTextDark)).toEqual(yiqTextLight)
    expect(colorYiq(yiqTextLight)).toEqual(yiqTextDark)
  })
})
