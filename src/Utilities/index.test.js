import * as Utilities from './index'

describe('Utilities', () => {
  it('Utilities', () => {
    expect(Utilities.Align !== undefined).toBe(true)
    expect(Utilities.Background !== undefined).toBe(true)
    expect(Utilities.Borders !== undefined).toBe(true)
    expect(Utilities.Clearfix !== undefined).toBe(true)
    expect(Utilities.Display !== undefined).toBe(true)
    expect(Utilities.Embed !== undefined).toBe(true)
    expect(Utilities.Flex !== undefined).toBe(true)
    expect(Utilities.Float !== undefined).toBe(true)
    expect(Utilities.Position !== undefined).toBe(true)
    expect(Utilities.Screenreaders !== undefined).toBe(true)
    expect(Utilities.Shadows !== undefined).toBe(true)
    expect(Utilities.Sizing !== undefined).toBe(true)
    expect(Utilities.Spacing !== undefined).toBe(true)
    expect(Utilities.Text !== undefined).toBe(true)
    expect(Utilities.Visibility !== undefined).toBe(true)
    expect(Utilities.checkExported).toBe(true)
  })
})
