import { themeColorLevel } from './themeColorLevel'

describe('Request a theme color level', () => {
  it('themeColorLevel default value', () => {
    expect(themeColorLevel()).toEqual('#007BFF')
    expect(themeColorLevel('primary', 0)).toEqual('#007BFF')
    expect(themeColorLevel('primary', 11)).toEqual('#007AFD')
    expect(themeColorLevel('secondary', 11)).toEqual('#6B747C')
    expect(themeColorLevel('secondary', -11)).toEqual('#6D767E')
  })
})
