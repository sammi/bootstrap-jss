import Color from 'color'
import { toLower } from 'lodash'
import percentValue from 'percent-value'

export const lighten = (rawColor, percent) => {
  const rgbColor = Color(rawColor)
  const percentage = percentValue(percent).from(100)
  let hsl = rgbColor.hsl()
  hsl.color[2] += percentage
  return toLower(hsl.hex())
}
