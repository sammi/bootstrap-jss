import { floatLeft, floatRight, floatNone } from './float'
describe('float', () => {
  it('float-left', () => {
    expect(floatLeft).toEqual({
      float: `left !important`
    })
  })

  it('float-right', () => {
    expect(floatRight).toEqual({
      float: `right !important`
    })
  })

  it('float-none', () => {
    expect(floatNone).toEqual({
      float: `none !important`
    })
  })
})
