import Color from 'color'
import percentValue from 'percent-value'

export const mix = (bodyBg, color, percentString) => {
  const ratio = percentValue(percentString).from(1.0)
  const mainColor = Color(bodyBg)
  const mixColor = Color(color)
  return mainColor.mix(mixColor, 1 - ratio).hex()
}
