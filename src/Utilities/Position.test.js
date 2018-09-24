import { zindexFixed, zindexSticky } from '../Variables/Zindex'

import { postitions, fixedTop, fixedBottom, stickyTop } from './Position'

describe('postions', () => {
  it('postions', () => {
    const positionsValue = {}
    const allPoistions = ['static', 'relative', 'absolute', 'fixed', 'sticky']
    allPoistions.forEach(position => {
      positionsValue[`position-${position}`] = { position: `${position} !important` }
    })
    expect(postitions).toEqual(positionsValue)
  })

  it('fixted-top', () => {
    expect(fixedTop).toEqual({
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: zindexFixed
    })
  })

  it('fixed-bottom', () => {
    expect(fixedBottom).toEqual({
      position: 'fixed',
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zindexFixed
    })
  })

  it('sticky-top', () => {
    expect(stickyTop).toEqual({
      '@supports (position: sticky)': {
        position: 'sticky',
        top: 0,
        zIndex: zindexSticky
      }
    })
  })
})
