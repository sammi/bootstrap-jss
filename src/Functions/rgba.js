import Color from 'color'
import _ from 'lodash'
export const rgba = (rawColor, alpha) => {
  const rgbHex = _.replace(rawColor, '!default', '').trim()

  const rgbColor = Color(rgbHex)

  return `rgba(${rgbColor.red()}, ${rgbColor.green()}, ${rgbColor.blue()}, ${alpha})`
}
