import { rgba } from './rgba'
describe('rgba', () => {
  it('rgba', () => {
    expect(rgba('#aBc', 0.075)).toEqual('rgba(170, 187, 204, 0.075)')
    expect(rgba('#aBc', 0.0)).toEqual('rgba(170, 187, 204, 0)')
    expect(rgba('#FFF', 1.0)).toEqual('rgba(255, 255, 255, 1)')
  })
})
