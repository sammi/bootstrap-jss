import { transitionFade, transitionCollapse } from '../Variables/Components'
import { transition } from '../Mixins/transition'

import { fade, collapse, collapsing } from './Transitions'

describe('Transitions classe', () => {
  it('fade', () => {
    expect(fade).toEqual({
      ...transition(transitionFade),
      '&:not(.show)': {
        opacity: 0
      }
    })
  })

  it('collapse', () => {
    expect(collapse).toEqual({
      '&:not(.show)': {
        display: 'none'
      }
    })
  })

  it('collapsing', () => {
    expect(collapsing).toEqual({
      position: 'relative',
      height: 0,
      overflow: 'hidden',
      ...transition(transitionCollapse)
    })
  })
})
