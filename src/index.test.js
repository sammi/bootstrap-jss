import * as Bootstrap from './index'

describe('Bootstrap', () => {
  it('Bootstrap', () => {
    expect(Bootstrap.Functions !== undefined).toBe(true)
    expect(Bootstrap.Mixins !== undefined).toBe(true)
    expect(Bootstrap.Variables !== undefined).toBe(true)
    expect(Bootstrap.checkExported).toBe(true)
  })
})
