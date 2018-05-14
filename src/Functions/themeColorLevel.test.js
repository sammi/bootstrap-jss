import { themeColors, white, themeColorInterval } from '../Variables/Colors'
import { mix } from '../Functions/mix'
import percentValue from 'percent-value'
import { themeColorLevel } from './themeColorLevel'

describe('Request a theme color level', () => {
  it('themeColorLevel', () => {
    const ratio = percentValue(themeColorInterval).from(1)
    const color = themeColors['primary']
    const colorBase = white
    const level = 1

    expect(themeColorLevel('primary', -1)).toEqual(mix(colorBase, color, level * ratio))
  })
})
