import { quote } from './quote'

describe('quote', () => {
  it('quote', () => {
    expect(quote('abc')).toEqual(`"abc"`)
  })
})
