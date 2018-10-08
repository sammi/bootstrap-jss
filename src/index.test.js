import * as Bootstrap from './index'

describe('Bootstrap', () => {
  it('Bootstrap', () => {
    expect(Bootstrap.Variables !== undefined).toBe(true)
    expect(Bootstrap.Mixins !== undefined).toBe(true)
    expect(Bootstrap.Functions !== undefined).toBe(true)
    expect(Bootstrap.Reboot !== undefined).toBe(true)
    expect(Bootstrap.Type !== undefined).toBe(true)
    expect(Bootstrap.Classes !== undefined).toBe(true)
    expect(Bootstrap.Utilities !== undefined).toBe(true)
    expect(Bootstrap.checkExported).toBe(true)
  })
})
