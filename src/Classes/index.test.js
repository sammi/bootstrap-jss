import * as Classes from './index'

describe('Classes', () => {
  it('Classes', () => {
    expect(Classes.Alert !== undefined).toBe(true)
    expect(Classes.Close !== undefined).toBe(true)
    expect(Classes.Transitions !== undefined).toBe(true)
    expect(Classes.checkExported).toBe(true)
  })
})
