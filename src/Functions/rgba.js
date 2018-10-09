import Color from 'color'
import { replace } from 'lodash'
export const rgba = (rawColor, alpha) => {
  const rgbHex = replace(rawColor, '!default', '').trim()

  const rgbColor = Color(rgbHex)

  return `rgba(${rgbColor.red()}, ${rgbColor.green()}, ${rgbColor.blue()}, ${alpha})`
}
