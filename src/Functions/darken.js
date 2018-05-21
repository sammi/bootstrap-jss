import Color from 'color'
import _ from 'lodash'
import percentValue from 'percent-value'

export const darken = (rawColor, percent) => {
  const rgbColor = Color(rawColor)
  const percentage = percentValue(percent).from(100)
  let hsl = rgbColor.hsl()
  hsl.color[2] -= percentage
  return _.toLower(hsl.hex())
}
