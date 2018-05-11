import Color from 'color'
import _ from 'lodash'
import percentValue from 'percent-value'

export const lighten = (rawColor, percent) => {
  const rgbColor = _.replace(rawColor, '!default', '').trim()

  const ratio = percentValue(percent).from(1)

  const lighternColor = Color(rgbColor).lighten(ratio)

  return lighternColor.hex()
}
