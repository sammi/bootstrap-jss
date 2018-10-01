import { invisible as invisibleMixin } from '../Mixins/visibility'

import { visible, invisible } from './Visibility'

describe('visibility', () => {
  it('visible', () => {
    expect(visible).toEqual({
      ...invisibleMixin('visible')
    })
  })

  it('invisible', () => {
    expect(invisible).toEqual({
      ...invisibleMixin('hidden')
    })
  })
})
