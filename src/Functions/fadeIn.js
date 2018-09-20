import Color from 'color'
import _ from 'lodash'
export const fadeIn = (rawColor, amount) => {
  const rgbColor = _.replace(rawColor, '!default', '').trim()

  const fadeColor = Color(rgbColor).fade(amount)

  return `rgba(${fadeColor.red()}, ${fadeColor.green()}, ${fadeColor.blue()}, ${fadeColor.alpha()})`
}
