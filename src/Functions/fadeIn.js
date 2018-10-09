import Color from 'color'
import { replace } from 'lodash'
export const fadeIn = (rawColor, amount) => {
  const rgbColor = replace(rawColor, '!default', '').trim()

  const fadeColor = Color(rgbColor).fade(amount)

  return `rgba(${fadeColor.red()}, ${fadeColor.green()}, ${fadeColor.blue()}, ${fadeColor.alpha()})`
}
