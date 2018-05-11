import Color from 'color'
import _ from 'lodash'
import format from 'string-format'

export const fadeIn = (rawColor, amount) => {
  const rgbColor = _.replace(rawColor, '!default', '').trim()

  const fadeColor = Color(rgbColor).fade(amount)

  return format('rgba({}, {}, {}, {})', fadeColor.red(), fadeColor.green(), fadeColor.blue(), fadeColor.alpha())
}
