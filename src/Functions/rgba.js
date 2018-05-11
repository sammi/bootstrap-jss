import Color from 'color'
import _ from 'lodash'
import format from 'string-format'

export const rgba = (rawColor, alpha) => {
  const rgbHex = _.replace(rawColor, '!default', '').trim()

  const rgbColor = Color(rgbHex)

  return format('rgba({}, {}, {}, {})', rgbColor.red(), rgbColor.green(), rgbColor.blue(), alpha)
}
