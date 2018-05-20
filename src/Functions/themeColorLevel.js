import { themeColors, black, white, themeColorInterval } from '../Variables/Colors'
import { mix } from '../Functions/mix'
import percentValue from 'percent-value'

export const themeColorLevel = (colorName = 'primary', level = 0) => {
  const color = themeColors[colorName]
  const colorBase = level > 0 ? black : white
  return mix(colorBase, color, Math.abs(level) * percentValue(themeColorInterval).from(1))
}
