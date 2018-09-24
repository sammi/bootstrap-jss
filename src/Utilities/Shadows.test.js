
import { boxShadowSm, boxShadow, boxShadowLg } from '../Variables/Components'

import { shadowSm, shadow, shadowLg, shadowNone } from './Shadows'

describe('shadow', () => {
  it('shadow-sm', () => {
    expect(shadowSm).toEqual({
      boxShadow: `${boxShadowSm} !important` 
    })
  })

  it('shadow', () => {
    expect(shadow).toEqual({
      boxShadow: `${boxShadow} !important`
    })
  })

  it('shadow-lg', () => {
    expect(shadowLg).toEqual({
      boxShadow: `${boxShadowLg} !important` 
    })
  })

  it('shadow-none', () => {
    expect(shadowNone).toEqual({
      boxShadow: 'none !important'
    })
  })
})
