import * as Classes from './index'

describe('Classes', () => {
  it('Classes', () => {
    expect(Classes.Alert !== undefined).toBe(true)
    expect(Classes.Close !== undefined).toBe(true)
    expect(Classes.Transitions !== undefined).toBe(true)
    expect(Classes.Badge !== undefined).toBe(true)
    expect(Classes.Buttons !== undefined).toBe(true)
    expect(Classes.Images !== undefined).toBe(true)
    expect(Classes.Code !== undefined).toBe(true)
    expect(Classes.Grid !== undefined).toBe(true)
    expect(Classes.Table !== undefined).toBe(true)
    expect(Classes.Form !== undefined).toBe(true)
    expect(Classes.Dropdown !== undefined).toBe(true)
    expect(Classes.InputGroup !== undefined).toBe(true)
    expect(Classes.CustomForms !== undefined).toBe(true)
    expect(Classes.Nav !== undefined).toBe(true)
    expect(Classes.Navbar !== undefined).toBe(true)
    expect(Classes.Card !== undefined).toBe(true)
    expect(Classes.Breadcrumb !== undefined).toBe(true)
    expect(Classes.checkExported).toBe(true)
  })
})
