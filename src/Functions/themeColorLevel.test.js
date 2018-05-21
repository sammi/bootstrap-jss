import { themeColorLevel } from './themeColorLevel'

describe('Request a theme color level', () => {
  it('themeColorLevel default value', () => {
    expect(themeColorLevel()).toEqual('#007BFF')
    expect(themeColorLevel('primary', 0)).toEqual('#007BFF')
    expect(themeColorLevel('primary', 11)).toEqual('#000F1F')
    expect(themeColorLevel('secondary', 11)).toEqual('#0D0E0F')
    expect(themeColorLevel('secondary', -11)).toEqual('#EDEEEF')
  })
})
