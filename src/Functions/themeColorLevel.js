import { themeColors, white, themeColorInterval } from '../Variables/Colors'
import { mix } from '../Functions/mix'
import percentValue from 'percent-value'

export const themeColorLevel = (colorName = 'primary', level = 0) => {
  const ratio = percentValue(themeColorInterval).from(1)
  const color = themeColors['primary']
  const colorBase = white
  return mix(colorBase, color, Math.abs(level) * ratio)
}
