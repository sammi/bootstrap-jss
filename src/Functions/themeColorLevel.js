import { themeColors, black, white, themeColorInterval } from '../Variables/Colors'
import { mix } from '../Functions/mix'
import percentValue from 'percent-value'
import format from 'string-format'

export const themeColorLevel = (colorName = 'primary', level = 0) => {
  const color = themeColors[colorName]
  const colorBase = level > 0 ? black : white
  const ratio = Math.abs(level) * percentValue(themeColorInterval).from(1)
  const percentString = format('{}%', ratio * 100)
  return mix(colorBase, color, percentString)
}
