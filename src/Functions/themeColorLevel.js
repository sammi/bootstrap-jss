import { themeColors, black, white, themeColorInterval } from '../Variables/Colors'
import { mix } from '../Functions/mix'
import percentValue from 'percent-value'

export const themeColorLevel = (colorName = 'primary', level = 0) => {
  const color = themeColors[colorName]
  const colorBase = level > 0 ? black : white
  const ratio = Math.abs(level) * percentValue(themeColorInterval).from(1)
  const percentString = `${ratio * 100}%`
  return mix(colorBase, color, percentString)
}
