import { transitionBase } from '../Variables/Components'

import { transition } from './transition'

describe('transition', () => {
  it('transition with base transition', () => {
    expect(transition()).toEqual({
      transition: transitionBase,
      '@media screen and (prefers-reduced-motion: reduce)': {
        transition: 'none'
      }
    })
  })

  it('transition with input transition', () => {
    expect(transition(true, ['all', '1.2s', 'ease-in-out'])).toEqual({
      transition: ['all', '1.2s', 'ease-in-out'],
      '@media screen and (prefers-reduced-motion: reduce)': {
        transition: 'none'
      }
    })
  })

  it('disable transition', () => {
    expect(transition(false, ['all', '1.2s', 'ease-in-out'])).toEqual({
      '@media screen and (prefers-reduced-motion: reduce)': {
        transition: 'none'
      }
    })
  })
})
