import {boxShadow} from './boxShadow'
describe('boxShadow', () => {
  it('boxShadow', () => {
    const hOffset = '10px'
    const vOffset = '20px'
    const blur = '20px'
    const spread = '10px'
    const color = 'red'
    const inset = 'inset'

    expect(boxShadow(true, hOffset, vOffset, blur, spread, color, inset)).toEqual({boxShadow: [
      hOffset, vOffset, blur, spread, color, inset
    ]})

    expect(boxShadow(false)).toEqual(null)
    expect(boxShadow(false, hOffset, vOffset, blur, spread, color, inset)).toEqual(null)
  })
})
