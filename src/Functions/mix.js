import Color from 'color'
import percentValue from 'percent-value'

export const mix = (bodyBg, color, percent) => {
  const ratio = percentValue(percent).from(1)
  const mainColor = Color(bodyBg)
  const mixColor = Color(color)
  return mainColor.mix(mixColor, 1 - ratio).hex()
}
